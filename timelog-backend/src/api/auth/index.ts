import { JWT } from "@/auth/jwt";
import { StatusCodes } from "@/helpers/statusCodes";
import { prismaClient } from "@/prisma";
import { createSwaggerDoc } from "@/swagger/createSwaggerDoc";
import { compare, hash } from "bcrypt";
import { Router } from "express";

const router = Router();
const SALT = 9;

export const signUpDocumentation = createSwaggerDoc(
  {
    path: "/api/auth/signup",
    method: "post",
    responses: [
      StatusCodes.OK,
      StatusCodes.INTERNAL_SERVER_ERROR,
      StatusCodes.BAD_REQUEST,
    ],
    requestBody: {
      content: {
        name: "string",
        email: "string",
        password: "string",
      },
      example: {
        email: "bo@testmail.com",
        name: "Boo Koo",
        password: "bestPassword123",
      },
    },
  },
  {
    optOutAuthMiddleware: true,
  }
);
router.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body as {
      name?: string;
      email?: string;
      password?: string;
    };

    if (!email || !password || !name) {
      res.sendStatus(StatusCodes.BAD_REQUEST);
      return;
    }

    const existingUser = await prismaClient.user.findUnique({
      where: {
        email,
      },
    });
    if (existingUser) {
      res.sendStatus(StatusCodes.BAD_REQUEST);
    }
    const hashedPassword = await hash(password, SALT);

    await prismaClient.user.create({
      data: {
        email,
        name,
        password: hashedPassword,
      },
    });
    res.sendStatus(StatusCodes.OK);
  } catch (error) {
    res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    console.log(error);
  }
});

export const signInDocumentation = createSwaggerDoc(
  {
    path: "/api/auth/signin",
    method: "post",
    responses: [
      StatusCodes.OK,
      StatusCodes.UNAUTHORIZED,
      StatusCodes.INTERNAL_SERVER_ERROR,
    ],
    requestBody: {
      content: {
        email: "string",
        password: "string",
      },
      example: {
        email: "bo@testmail.com",
        password: "bestPassword123",
      },
    },
  },
  {
    optOutAuthMiddleware: true,
  }
);
router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body as {
      email?: string;
      password?: string;
    };

    if (!email || !password) {
      res.sendStatus(StatusCodes.BAD_REQUEST);
      return;
    }
    const user = await prismaClient.user.findUnique({
      where: {
        email,
      },
      select: {
        name: true,
        email: true,
        password: true,
      },
    });
    if (user) {
      const { password: encryptedPass, ...userFields } = user;
      const validPassword = await compare(password, encryptedPass);
      if (validPassword) {
        res.status(StatusCodes.OK).json({
          ...userFields,
          accessToken: new JWT(userFields.email).createToken(encryptedPass),
        });
        return;
      }
    }
    res.sendStatus(StatusCodes.UNAUTHORIZED);
  } catch (error) {
    console.error(error);
    res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
  }
});

export { router as authRouter };
