import { Request, Response } from "express";
import { ResponseModel } from "../../../models/response";
import { SignInAdmin } from "../../../models/signinAdmin";
import { AdminService } from "../services/admin";

export namespace AdminController {
  export const signInAdmin = async (req: Request, res: Response) => {
    const body = req.body as SignInAdmin;
    const result = await AdminService.signInAdmin(body);

    if (typeof result == "number") {
      return ResponseModel(res, 200, result, null);
    } else {
      return ResponseModel(res, 400, null, { msg: result });
    }
  };
}
