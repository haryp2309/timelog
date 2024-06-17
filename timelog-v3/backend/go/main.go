package main

import (
	"context"
	"errors"
	"fmt"
	"log"
	"net/http"
	"time"

	"github.com/haryp2309/timelog/db"
	socketio "github.com/vchitai/go-socket.io/v4"
	"github.com/vchitai/go-socket.io/v4/engineio"
	"github.com/vchitai/go-socket.io/v4/engineio/transport"
	"github.com/vchitai/go-socket.io/v4/engineio/transport/polling"
	"github.com/vchitai/go-socket.io/v4/engineio/transport/websocket"
)

func GetUserRoom(c socketio.Conn, dbClient *db.PrismaClient, ctx context.Context) (string, error) {

	authString := c.RemoteHeader().Get("token")
	if authString == "" {
		return "", errors.New("missing auth string")
	}

	user, err := dbClient.User.FindFirst(db.User.AuthTokens.Some(db.AuthTokens.Token.Equals(authString))).Exec(ctx)
	if err != nil {
		return "", err
	}

	return fmt.Sprintf("room/%s", user.ID), nil
}

func PrepareDbClient(ctx context.Context) (*db.PrismaClient, error) {
	client := db.NewClient()
	if err := client.Prisma.Connect(); err != nil {
		return nil, err
	}

	user1, err := client.User.
		UpsertOne(db.User.ID.Equals("user1")).
		Create(db.User.Name.Set("Secret User"), db.User.ID.Set("user1")).
		Update().
		Exec(ctx)

	if err != nil {
		return nil, err
	}

	_, err = client.AuthTokens.UpsertOne(db.AuthTokens.Token.Equals("secret_token")).
		Create(db.AuthTokens.User.Link(db.User.ID.Equals(user1.ID)), db.AuthTokens.Token.Set("secret_token")).
		Update().
		Exec(ctx)

	if err != nil {
		return nil, err
	}

	return client, nil

}

func getTimerSet(timerId string) string {
	return fmt.Sprintf("%s/timer-set", timerId)
}

func getTimerStopped(timerId string) string {
	return fmt.Sprintf("%s/timer-stopped", timerId)
}

type TimerAction struct {
	Type      string `json:"type"`
	Id        string `json:"id"`
	StartTime string `json:"startTime"`
	EndTime   string `json:"endTime"`
}

func (t TimerAction) getFullId(roomId string) string {
	return fmt.Sprintf("%s/%s", roomId, t.Id)
}

func PrepareServer(ctx context.Context, dbClient *db.PrismaClient) *socketio.Server {
	var allowOriginFunc = func(r *http.Request) bool {
		return true
	}

	pollingTransport := polling.Transport{
		CheckOrigin: allowOriginFunc,
	}
	websocketTransport := websocket.Transport{
		CheckOrigin: func(r *http.Request) bool {
			return false
		},
	}
	options := engineio.Options{
		RequestChecker: func(r *http.Request) (http.Header, error) {
			header := make(map[string][]string)
			header["Access-Control-Allow-Headers"] = []string{"*"}
			header["Access-Control-Allow-Origin"] = []string{"*"}
			return header, nil
		},
		Transports: []transport.Transport{
			&pollingTransport,
			&websocketTransport,
		},
	}

	server := socketio.NewServer(&options)

	server.OnConnect("/", func(c socketio.Conn, m map[string]interface{}) error {
		roomId, err := GetUserRoom(c, dbClient, ctx)
		if err != nil {
			return c.Refuse(err)
		}

		c.Join(roomId)
		log.Printf("Someone joined room '%v'", roomId)

		stopwatch, err := dbClient.Stopwatch.FindUnique(db.Stopwatch.ID.Equals(roomId + "/main_timer")).
			Exec(ctx)

		if err == nil {
			c.Emit(getTimerSet(stopwatch.ID), stopwatch.StartedAt.Format(time.RFC3339))

			if stopwatch.EndedAt.UnixMilli() > 0 {
				c.Emit(getTimerStopped(stopwatch.ID), stopwatch.EndedAt.Format(time.RFC3339))

			}
		}

		return nil
	})

	server.OnEvent("/", "broadcast", func(s socketio.Conn, msg string) error {
		roomId, err := GetUserRoom(s, dbClient, ctx)
		if err != nil {
			return s.Refuse(err)
		}
		log.Printf("Broadcasting message: %v", msg)
		server.BroadcastToRoom("/", roomId, "message", msg)
		return nil
	})

	server.OnEvent("/", "timer-action", func(s socketio.Conn, action TimerAction) error {
		roomId, err := GetUserRoom(s, dbClient, ctx)
		if err != nil {
			s.Refuse(err)
		}

		switch action.Type {
		case "timer-start":
			timerId := action.getFullId(roomId)
			currentTime := time.Now()
			currentTimeISO := currentTime.Format(time.RFC3339)

			_, err := dbClient.Stopwatch.
				UpsertOne(db.Stopwatch.ID.Equals(timerId)).
				Create(
					db.Stopwatch.Label.Set("Main Timer"),
					db.Stopwatch.ID.Set(timerId),
					db.Stopwatch.StartedAt.Set(currentTime),
				).
				Update(
					db.Stopwatch.StartedAt.Set(currentTime),
					db.Stopwatch.EndedAt.Set(time.UnixMilli(0)),
				).
				Exec(ctx)

			if err != nil {
				s.Refuse(err)
			}

			server.BroadcastToRoom("/", roomId, getTimerSet(timerId), currentTimeISO)

			return nil
		case "timer-stop":
			timerId := action.getFullId(roomId)
			currentTime := time.Now()
			currentTimeISO := currentTime.Format(time.RFC3339)
			_, err = dbClient.Stopwatch.FindUnique(db.Stopwatch.ID.Equals(timerId)).
				Update(db.Stopwatch.EndedAt.Set(currentTime)).
				Exec(ctx)

			if err != nil {
				s.Refuse(err)
			}

			server.BroadcastToRoom("/", roomId, getTimerStopped(timerId), currentTimeISO)

			return nil

		}

		log.Printf("%s %v", roomId, action)

		return nil
	})

	server.OnError("/", func(c socketio.Conn, err error) {
		log.Printf("[ERROR]: %v", err)
	})

	return server
}

func main() {

	var err error

	ctx := context.Background()

	dbClient, err := PrepareDbClient(ctx)
	if err != nil {
		log.Fatal(err)
	}

	server := PrepareServer(ctx, dbClient)

	defer server.Close()
	go func() {
		if err := server.Serve(); err != nil {
			log.Fatal(err)
		}
	}()

	http.Handle("/socket.io/", server)
	http.Handle("/", http.FileServer(http.Dir("./assets")))

	if err := http.ListenAndServe(":3000", nil); err != nil {
		log.Fatal(err)
	}

}
