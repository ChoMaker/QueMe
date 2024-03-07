import { Request, Response } from "express";
import { ReserveQue } from "../../../models/reserveQue";
import { QueService } from "../services/que";

export namespace QueController {
  export const reserveQue = async (req: Request, res: Response) => {
    const body = req.body as ReserveQue;

    try {
      const result = await QueService.reserveQue(body);
      return res.status(200).json({
        message: "Reserve que successfully",
      });
    } catch (error) {
      return res.status(500).json({
        message: "Can't reserve que",
      });
    }
  };
}
