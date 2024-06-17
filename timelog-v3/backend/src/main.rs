use axum::routing::get;
use socketioxide::{
    extract::{Data, SocketRef},
    SocketIo,
};

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let (layer, io) = SocketIo::new_layer();

    // Register a handler for the default namespace
    io.ns("/", |s: SocketRef| {
        println!("New connection!");

        // For each "message" event received, send a "message-back" event with the "Hello World!" event
        s.on("message", |s: SocketRef| {
            println!("Got a message!");
            s.emit("message-back", "Hello Worldu!").ok();
        });

        s.on("subscribe", |so: SocketRef, Data::<String>(data)| {
            println!("{} entered!", data);
            let err = so.join("main_room").err();
            if let Some(err) = err {
                println!("{}", err.to_string())
            }
            so.to("main_room").emit("message-back", data).ok();
        });

        s.on("broadcast", |so: SocketRef, Data::<String>(data)| {
            println!("{} is broadcasted!", data);
            so.emit("message-back", data).ok();
        });
    });

    let app = axum::Router::new().layer(layer);

    let listener = tokio::net::TcpListener::bind("0.0.0.0:3000").await.unwrap();
    axum::serve(listener, app).await.unwrap();

    Ok(())
}
