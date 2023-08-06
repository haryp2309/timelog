import { rootDocumentation } from "@/api";
import { signInDocumentation, signUpDocumentation } from "@/api/auth";
import { getClientDocumentaion, newClientDocumentation } from "@/api/client";
import {
  getProjectDocumentation,
  newProjectDocumentation,
} from "@/api/project";
import { getTimerEntryDocumentaion } from "@/api/timerEntry/getTimerEntry";
import { newTimerEntryDocumentaion } from "@/api/timerEntry/new";
import { getUserTimerEntriesDocumentaion } from "@/api/user";
import { Express } from "express";
import swaggerUi from "swagger-ui-express";

const specs = {
  openapi: "3.1.0",
  info: {
    title: "Timelog Express API with Swagger",
    version: "0.1.0",
    description:
      "This is a simple CRUD API application made with Express and documented with Swagger",
    license: { name: "MIT", url: "https://spdx.org/licenses/MIT.html" },
  },
  paths: {
    ...signInDocumentation,
    ...signUpDocumentation,
    ...rootDocumentation,
    ...newClientDocumentation,
    ...newProjectDocumentation,
    ...newTimerEntryDocumentaion,
    ...getTimerEntryDocumentaion,
    ...getUserTimerEntriesDocumentaion,
    ...getProjectDocumentation,
    ...getClientDocumentaion,
  },
};

export const setupSwagger = (app: Express) => {
  app.get("/api-docs.json", (req, res) => res.json(specs));
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
};
