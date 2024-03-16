import express, { Request, Response } from "express";
import { EventController } from "../features/user/controllers/event";

export const eventRouter = express.Router();
eventRouter.get("/qm/getevents", EventController.getEvents);
