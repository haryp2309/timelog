import { handleGetTimerEntry } from "@/api/timerEntry/getTimerEntry";
import { handleNewTimerEntry } from "@/api/timerEntry/new";
import { Router } from "express";

const router = Router();

router.post("/new", handleNewTimerEntry);

router.get("/get/:id", handleGetTimerEntry);

export { router as timerEntryRouter };
