import { CustomHttpHeaders } from "@/constants/headers";
import { StatusCodes } from "@/helpers/statusCodes";
import { prismaClient } from "@/prisma";
import { createSwaggerDoc } from "@/swagger/createSwaggerDoc";
import { Router } from "express";

const router = Router();

export const getUserTimerEntriesDocumentaion = createSwaggerDoc({
  method: "get",
  path: "/api/user/timeentries",
  responses: [StatusCodes.NOT_FOUND, StatusCodes.INTERNAL_SERVER_ERROR],
});
router.get("/timeentries", async (req, res) => {
  try {
    const email = req.headers[CustomHttpHeaders.ACCESS_USER] as
      | string
      | undefined;

    const uncheckedTimerEntryIds = req.query.timerEntryIds as
      | string
      | string[]
      | undefined;
    const timerEntryIds =
      typeof uncheckedTimerEntryIds === "string"
        ? [uncheckedTimerEntryIds]
        : uncheckedTimerEntryIds;
    console.log("👺", timerEntryIds);

    const timeEntry = await prismaClient.timerEntry.findMany({
      where: {
        project: {
          client: {
            userEmail: email,
          },
        },
        id: {
          in: timerEntryIds,
        },
      },
      select: {
        id: true,
        description: true,
        endTime: true,
        startTime: true,
        project: {
          select: {
            id: true,
            client: {
              select: {
                id: true,
              },
            },
          },
        },
      },
      orderBy: {
        startTime: "desc",
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
});

export { router as userRouter };
