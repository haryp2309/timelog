import { authRouter } from "@/api/auth";
import { clientRouter } from "@/api/client";
import { projectRouter } from "@/api/project";
import { timerEntryRouter } from "@/api/timerEntry";
import { userRouter } from "@/api/user";
import { authMiddleware } from "@/auth/authMiddleware";
import { CustomHttpHeaders } from "@/constants/headers";
import { StatusCodes } from "@/helpers/statusCodes";
import { createSwaggerDoc } from "@/swagger/createSwaggerDoc";
import { Router } from "express";

const router = Router();
router.use("/auth", authRouter);
router.use(async (req, res, next) => {
  const token = req.headers[CustomHttpHeaders.ACCESS_TOKEN] as
    | string
    | undefined;
  const email = req.headers[CustomHttpHeaders.ACCESS_USER] as
    | string
    | undefined;

  authMiddleware(
    email,
    token,
    () => res.sendStatus(StatusCodes.FORBIDDEN),
    () => next()
  );
});
router.use("/client", clientRouter);
router.use("/project", projectRouter);
router.use("/timerentry", timerEntryRouter);
router.use("/user", userRouter);

export const rootDocumentation = createSwaggerDoc({
  method: "get",
  path: "/api",
  responses: [StatusCodes.OK],
});

router.get("/", (req, res) => {
  res.status(StatusCodes.OK).json({
    message: "Hello World",
  });
});

export { router as apiRouter };
