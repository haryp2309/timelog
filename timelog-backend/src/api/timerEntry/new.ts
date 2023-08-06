import { CustomHttpHeaders } from "@/constants/headers";
import { StatusCodes } from "@/helpers/statusCodes";
import { prismaClient } from "@/prisma";
import { createSwaggerDoc } from "@/swagger/createSwaggerDoc";
import { ioManager } from "@/websocket/io";
import { RequestHandler } from "express";
import { DateTime } from "luxon";

export const newTimerEntryDocumentaion = createSwaggerDoc({
  method: "post",
  path: "/api/timerentry/new",
  responses: [
    StatusCodes.BAD_REQUEST,
    StatusCodes.UNAUTHORIZED,
    StatusCodes.INTERNAL_SERVER_ERROR,
  ],
  requestBody: {
    content: {
      startTime: "string",
      endTime: "string",
      projectId: "string",
      description: "string",
    },
    example: {
      startTime: "2017-05-15T08:30:00",
      endTime: "",
      projectId: "1ca2d824-3e68-4a0d-80f1-cab5084f593f",
      description: "Did some stuff",
    },
  },
});

export const handleNewTimerEntry: RequestHandler = async (req, res) => {
  try {
    const email = req.headers[CustomHttpHeaders.ACCESS_USER] as
      | string
      | undefined;
    const {
      description,
      projectId,
      endTime: uncheckedEndTime,
      startTime: uncheckedStartTime,
    } = req.body as Partial<{
      startTime: string;
      endTime: string;
      projectId: string;
      description: string;
    }>;
    if (!uncheckedStartTime || !projectId || !email) {
      res.sendStatus(StatusCodes.BAD_REQUEST);
      return;
    }

    const startTime = DateTime.fromISO(uncheckedStartTime);
    const endTime = uncheckedEndTime
      ? DateTime.fromISO(uncheckedEndTime)
      : undefined;

    if (!startTime.isValid || (endTime && !endTime.isValid)) {
      res.sendStatus(StatusCodes.BAD_REQUEST);
      return;
    }

    const project = await prismaClient.project.findUnique({
      where: {
        id: projectId,
        client: {
          userEmail: email,
        },
      },
      select: { id: true },
    });

    if (project === null) {
      res.sendStatus(StatusCodes.UNAUTHORIZED);
      return;
    }

    const timerEntry = await prismaClient.timerEntry.create({
      data: {
        startTime: startTime.toJSDate(),
        endTime: endTime?.toJSDate(),
        description,
        projectId,
      },
    });

    ioManager.emitUpdateTimerEntries(email, [timerEntry.id]);
    res.json(timerEntry);
  } catch (err) {
    console.error(err);
    res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};
