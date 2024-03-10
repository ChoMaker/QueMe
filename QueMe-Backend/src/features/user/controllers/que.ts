import { Request, Response } from "express";
import { ReserveQue } from "../../../models/reserveQue";
import { QueService } from "../services/que";
import { GetQue } from "../../../models/getQue";
import { UserService } from "../services/user";

export namespace QueController {
  export const reserveQue = async (req: Request, res: Response) => {
    const body = req.body as ReserveQue;

    try {
      const result = await QueService.reserveQue(body);
      return res.status(200).json({
        message: "Reserve que successfully",
        result: result,
      });
    } catch (error) {
      return res.status(404).json({
        message: "Can't reserve que",
      });
    }
  };

  export const getQue = async (req: Request, res: Response) => {
    const body = req.query as unknown as GetQue;

    try {
      const result = await QueService.getQue(body);
      return res.status(200).json({
        result: {
          que: result?.queData2,
          table: result?.tableData2,
        },
      });
    } catch (error) {
      return res.status(500).json({
        message: "No data",
      });
    }
  };
}
