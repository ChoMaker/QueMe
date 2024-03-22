import { Request, Response } from "express";
import { ResponseModel } from "../../../models/response";
import { SignInAdmin } from "../../../models/signinAdmin";
import { AdminService } from "../services/admin";

export namespace AdminController {
  export const signInAdmin = async (req: Request, res: Response) => {
    const body = req.body as SignInAdmin;

    try {
      const result = await AdminService.signInAdmin(body);
      return res.status(200).json({
        message: "Login successfully",
        result: result,
      });
    } catch (error) {
      return res.status(404).json({
        message: "Can't login to backoffice",
      });
    }
  };
}
