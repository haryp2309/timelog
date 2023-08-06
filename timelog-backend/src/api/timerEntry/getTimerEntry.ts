import { CustomHttpHeaders } from "@/constants/headers";
import { StatusCodes } from "@/helpers/statusCodes";
import { prismaClient } from "@/prisma";
import { createSwaggerDoc } from "@/swagger/createSwaggerDoc";
import { RequestHandler } from "express";

export const getTimerEntryDocumentaion = createSwaggerDoc({
  method: "get",
  path: "/api/timerentry/get/{id}",
  responses: [StatusCodes.NOT_FOUND, StatusCodes.INTERNAL_SERVER_ERROR],
  dynamicRouteParams: [
    {
      name: "id",
      type: "string",
      example: "41339610-7a1f-4525-a542-a043701b6938",
    },
  ],
});

export const handleGetTimerEntry: RequestHandler = async (req, res) => {
  try {
    const email = req.headers[CustomHttpHeaders.ACCESS_USER] as
      | string
      | undefined;
    const { id } = req.params;

    const timeEntry = await prismaClient.timerEntry.findUnique({
      where: {
        id,
        project: {
          client: {
            userEmail: email,
          },
        },
      },
    });

    if (!timeEntry) {
      res.sendStatus(StatusCodes.NOT_FOUND);
      return;
    }

    res.json(timeEntry);
  } catch (err) {
    console.error(err);
    res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};
