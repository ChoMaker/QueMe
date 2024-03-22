import { Request, Response } from "express";
import { ReserveQue } from "../../../models/reserveQue";
import { QueService } from "../services/que";
import { GetQue } from "../../../models/getQue";
import { UserService } from "../services/user";
import { UploadPayslip } from "../../../models/uploadPayslip";
import multer from "multer";
import path from "path";
import { ResponseModel } from "../../../models/response";

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

  export const uploadPayslip = async (req: Request, res: Response) => {
    const body = req.body as UploadPayslip;
    const file = req.file?.path;

    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    try {
      const result = await QueService.uploadPayslip(body, file!);
      return ResponseModel(res, 200, { result }, null);
    } catch (error) {
      return ResponseModel(res, 500, null, { msg: "Can't upload payslip" });
    }
  };

  export const getAllQue = async (req: Request, res: Response) => {
    try {
      const result = await QueService.getAllQue();
      return res.status(200).json({
        data: result,
      });
    } catch (error) {
      return res.status(400).json({
        message: "Can't get all que",
      });
    }
  };
}
