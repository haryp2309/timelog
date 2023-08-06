import { prismaClient } from "@/prisma";
import jwt from "jsonwebtoken";

export class JWT {
  algorithm = "HS256" as const;
  email: string;

  constructor(email: string) {
    this.email = email;
  }
  createToken(encryptedPass: string) {
    return jwt.sign({ email: this.email }, encryptedPass, {
      algorithm: this.algorithm,
      expiresIn: 86400,
    });
  }

  async verifyToken(token: string) {
    const { password: encryptedPass } =
      (await prismaClient.user.findUnique({
        where: {
          email: this.email,
        },
        select: {
          password: true,
        },
      })) || {};

    if (!encryptedPass) {
      return false;
    }

    try {
      jwt.verify(token, encryptedPass, {
        algorithms: [this.algorithm],
      });
    } catch (err) {
      console.error(err);
      return false;
    }
    return true;
  }
}
