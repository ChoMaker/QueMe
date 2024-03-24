import { Request, Response } from "express";
import { ReserveQue } from "../../../models/reserveQue";
import { QueService } from "../services/que";
import { GetQue } from "../../../models/getQue";
import { UserService } from "../services/user";
import { UploadPayslip } from "../../../models/uploadPayslip";
import multer from "multer";
import path from "path";
import { ResponseModel } from "../../../models/response";
import { DeleteQue } from "../../../models/deleteQue";
import { UpdateStatus } from "../../../models/updateStatus";
import { UpdateAmount } from "../../../models/updateAmount";

export namespace QueController {
  export const reserveQue = async (req: Request, res: Response) => {
    const body = req.body as ReserveQue;
    const error: Error = new Error("Error message");

    try {
      const result = await QueService.reserveQue(body);
      return res.status(200).json({
        message: "Reserve que successfully",
        result: result,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Can't reserve que",
        error: (error as any).message,
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
      return res.status(404).json({
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
      return ResponseModel(res, 404, null, { msg: "Can't upload payslip" });
    }
  };

  export const getAllQue = async (req: Request, res: Response) => {
    try {
      const result = await QueService.getAllQue();
      return res.status(200).json({
        result: {
          que: result?.allQue,
          user: result?.userData,
          table: result?.tableData,
          event: result?.eventData,
        },
      });
    } catch (error) {
      return res.status(404).json({
        message: "Can't get all que",
      });
    }
  };

  export const deleteQue = async (req: Request, res: Response) => {
    const body = req.body as DeleteQue;

    try {
      const result = await QueService.deleteQue(body);
      return res.status(200).json({
        message: "Delete successfully",
        result: result,
      });
    } catch (error) {
      return res.status(404).json({
        message: "Can't delete this que",
      });
    }
  };

  export const updateStatus = async (req: Request, res: Response) => {
    const body = req.body as UpdateStatus;

    try {
      const result = await QueService.updateStatus(body);
      return res.status(200).json({
        message: "Status updated successfully",
        id: body.id,
        status: body.status,
      });
    } catch (error) {
      return res.status(404).json({
        message: "Internal server error",
      });
    }
  };

  export const updateAmount = async (req: Request, res: Response) => {
    const body = req.body as UpdateAmount;

    try {
      const result = await QueService.updateAmount(body);
      return res.status(200).json({
        message: "Update successfully",
        result: result,
      });
    } catch (error) {
      return res.status(404).json({
        message: "Can't update amount",
      });
    }
  };
}
