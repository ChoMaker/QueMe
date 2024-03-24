import { Request, Response } from "express";
import { EventService } from "../services/event";
import { CreateEvent } from "../../../models/createEvent";
import { ResponseModel } from "../../../models/response";
import multer from "multer";
import path from "path";
import { DeleteEvent } from "../../../models/deleteEvent";

export namespace EventController {
  export const getEvents = async (req: Request, res: Response) => {
    try {
      const result = await EventService.getEvents();
      return res.status(200).json({
        data: result,
      });
    } catch (error) {
      return res.status(404).json({
        message: "Can't get all events",
      });
    }
  };

  export const createEvent = async (req: Request, res: Response) => {
    const body = req.body as CreateEvent;
    const file = req.file?.path;

    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    try {
      const result = await EventService.createEvent(body, file!);
      return res.status(200).json({
        message: "Create event successfully",
        result: result,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Can't create event",
      });
    }
  };

  export const deleteEvent = async (req: Request, res: Response) => {
    const body = req.body as DeleteEvent;

    try {
      const result = await EventService.deleteEvent(body);
      return res.status(200).json({
        message: "Delete successfully",
        result: result,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Can't delete this event",
      });
    }
  };
}
