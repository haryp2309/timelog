import { CustomHttpHeaders } from "@/constants/headers";
import { StatusCodes } from "@/helpers/statusCodes";
import { prismaClient } from "@/prisma";
import { createSwaggerDoc } from "@/swagger/createSwaggerDoc";
import { Router } from "express";

const router = Router();

export const newProjectDocumentation = createSwaggerDoc({
  path: "/api/project/new",
  method: "post",
  responses: [
    StatusCodes.OK,
    StatusCodes.INTERNAL_SERVER_ERROR,
    StatusCodes.BAD_REQUEST,
    StatusCodes.UNAUTHORIZED,
  ],
  requestBody: {
    content: {
      name: "string",
      clientId: "string",
    },
    example: {
      name: "My Project",
      clientId: "1d6c33a9-7a17-4c93-921c-13fc2476299d",
    },
  },
});
router.post("/new", async (req, res) => {
  const { name, clientId } = req.body as { name?: string; clientId?: string };
  const email = req.headers[CustomHttpHeaders.ACCESS_USER] as
    | string
    | undefined;

  if (!name || !clientId || !email) {
    res.sendStatus(StatusCodes.BAD_REQUEST);
    return;
  }

  const client = await prismaClient.client.findFirst({
    where: {
      userEmail: email,
      id: clientId,
    },
    select: {
      id: true,
    },
  });

  if (!client) {
    res.sendStatus(StatusCodes.UNAUTHORIZED);
    return;
  }

  const project = await prismaClient.project.create({
    data: {
      name,
      color: "#ffffff",
      clientId: client.id,
    },
  });

  res.json(project);
});

export const getProjectDocumentation = createSwaggerDoc({
  path: "/api/project/get/{projectId}",
  method: "get",
  responses: [StatusCodes.BAD_REQUEST, StatusCodes.NOT_FOUND],
  dynamicRouteParams: [
    {
      name: "projectId",
      type: "string",
      example: "1ca2d824-3e68-4a0d-80f1-cab5084f593f",
    },
  ],
});
router.get("/get/:projectId", async (req, res) => {
  const email = req.headers[CustomHttpHeaders.ACCESS_USER] as
    | string
    | undefined;

  const { projectId } = req.params;

  if (!email || !projectId) {
    res.sendStatus(StatusCodes.BAD_REQUEST);
    return;
  }

  const project = await prismaClient.project.findUnique({
    where: {
      id: projectId,
      client: {
        user: {
          email,
        },
      },
    },
  });

  if (!project) {
    res.sendStatus(StatusCodes.NOT_FOUND);
    return;
  }

  return res.json(project);
});

export { router as projectRouter };
