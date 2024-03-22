import { Request, Response } from "express";
import { EventService } from "../services/event";
import { CreateEvent } from "../../../models/createEvent";
import { ResponseModel } from "../../../models/response";
import multer from "multer";
import path from "path";

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

    console.log(req.body);

    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    try {
      const result = await EventService.createEvent(body, file!);
      return ResponseModel(res, 200, { result }, null);
    } catch (error) {
      return ResponseModel(res, 500, null, { msg: "Can't upload image" });
    }
  };
}
