import { authMiddleware } from "@/auth/authMiddleware";
import { SocketEvent } from "@/websocket/socketEvent";
import { createServer } from "http";
import { BroadcastOperator, Server, Socket } from "socket.io";
import { DefaultEventsMap } from "socket.io/dist/typed-events";

class IoManager {
  io?: Server;

  getIo(): Server {
    if (this.io) {
      return this.io;
    }
    throw Error("IO is not initialized");
  }

  setupWebSocket(httpServer: ReturnType<typeof createServer>) {
    this.io = new Server(httpServer);
    this.io.use((socket, next) => {
      const { user, token } = socket.handshake.auth as {
        user: string | undefined;
        token: string | undefined;
      };
      authMiddleware(
        user,
        token,
        () => next(new Error("UNAUTHORIZED")),
        () => next()
      );
    });
    this.io.on("connection", (socket) => {
      const { user } = socket.handshake.auth as { user: string };
      console.log(`user (${user}) connected`);
      socket.join(user);

      this.emitUpdateTimerEntriesInternal(socket, null);

      socket.on("emit:startTimer", (msg) => {
        this.getIo().to(user).emit("startTimer", msg);
      });
      socket.on("emit:stopTimer", (msg) => {
        this.getIo().to(user).emit("stopTimer", msg);
      });
      socket.on("emit:resetTimer", (msg) => {
        this.getIo().to(user).emit("resetTimer", msg);
      });
      socket.on("disconnect", () => {
        console.log("user disconnected");
      });
    });
  }

  private emitUpdateTimerEntriesInternal(
    socket: Socket | BroadcastOperator<DefaultEventsMap, any>,
    timerEntryIds: string[] | null
  ) {
    socket.emit(SocketEvent.UPDATE_TIMERENTRIES, { timerEntryIds });
  }

  emitUpdateTimerEntries(user: string, timerEntryIds: string[]) {
    this.emitUpdateTimerEntriesInternal(this.getIo().to(user), timerEntryIds);
  }
}

export const ioManager = new IoManager();
