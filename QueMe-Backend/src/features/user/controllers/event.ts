import { Request, Response } from "express";
import { EventService } from "../services/event";

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
}
