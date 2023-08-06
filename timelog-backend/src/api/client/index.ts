import { CustomHttpHeaders } from "@/constants/headers";
import { StatusCodes } from "@/helpers/statusCodes";
import { prismaClient } from "@/prisma";
import { createSwaggerDoc } from "@/swagger/createSwaggerDoc";
import { Router } from "express";

const router = Router();

export const newClientDocumentation = createSwaggerDoc({
  path: "/api/client/new",
  method: "post",
  responses: [
    StatusCodes.OK,
    StatusCodes.INTERNAL_SERVER_ERROR,
    StatusCodes.BAD_REQUEST,
  ],
  requestBody: {
    content: {
      name: "string",
    },
    example: {
      name: "My Project",
    },
  },
});
router.post("/new", async (req, res) => {
  const { name } = req.body as { name?: string };
  const email = req.headers[CustomHttpHeaders.ACCESS_USER] as
    | string
    | undefined;

  if (!name || !email) {
    res.sendStatus(StatusCodes.BAD_REQUEST);
    return;
  }

  const client = await prismaClient.client.create({
    data: {
      name,
      userEmail: email,
    },
  });

  res.json(client);
});

export const getClientDocumentaion = createSwaggerDoc({
  method: "get",
  path: "/api/client/get/{clientId}",
  responses: [StatusCodes.NOT_FOUND, StatusCodes.BAD_REQUEST],
  dynamicRouteParams: [
    {
      name: "clientId",
      type: "string",
      example: "1d6c33a9-7a17-4c93-921c-13fc2476299d",
    },
  ],
});

router.get("/get/:clientId", async (req, res) => {
  const email = req.headers[CustomHttpHeaders.ACCESS_USER] as
    | string
    | undefined;

  const { clientId } = req.params;

  if (!email || !clientId) {
    res.sendStatus(StatusCodes.BAD_REQUEST);
    return;
  }

  const client = await prismaClient.client.findUnique({
    where: {
      id: clientId,
      user: {
        email,
      },
    },
  });

  if (!client) {
    res.sendStatus(StatusCodes.NOT_FOUND);
    return;
  }

  return res.json(client);
});

export { router as clientRouter };
