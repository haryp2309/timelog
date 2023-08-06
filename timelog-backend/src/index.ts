import { setupSwagger } from "@/swagger/swaggerSetup";
import { ioManager } from "@/websocket/io";
import express from "express";
import { createServer } from "http";
import { apiRouter } from "./api";

const app = express();
setupSwagger(app);
app.use(express.json());
const httpServer = createServer(app);
const port = 3000;
ioManager.setupWebSocket(httpServer);

app.use("/api", apiRouter);

httpServer.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
