import { PrismaClient } from "@prisma/client";

const createPrismaClient = () => {
  const prismaClient = new PrismaClient();
  return prismaClient;
};

export const prismaClient = createPrismaClient();
