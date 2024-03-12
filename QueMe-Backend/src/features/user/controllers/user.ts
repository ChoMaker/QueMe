import { Request, Response } from "express";
import { SignUpRequest } from "../../../models/signUpRequest";
import { UserService } from "../services/user";
import { SignInRequest } from "../../../models/signInRequest";
import { ForgotPassword } from "../../../models/forgotPassword";
import { UpdatePassword } from "../../../models/updatePassword";
import { GetUser } from "../../../models/getUser";
import { ResponseModel } from "../../../models/response";

export namespace UserController {
  export const signIn = async (req: Request, res: Response) => {
    const body = req.body as SignInRequest;
    const result = await UserService.signIn(body);

    if (typeof result == "number") {
      return ResponseModel(res, 200, result, null);
    } else {
      return ResponseModel(res, 400, null, { msg: result });
    }
  };

  export const signUp = async (req: Request, res: Response) => {
    const body = req.body as SignUpRequest;
    const result = await UserService.signUp(body);

    if (result) {
      return ResponseModel(res, 200, result, null);
    } else {
      return ResponseModel(res, 500, result, {
        msg: "Phonenumber has been already used",
      });
    }
  };

  export const forgotPassword = async (req: Request, res: Response) => {
    const body = req.body as ForgotPassword;
    const result = await UserService.forgotPassword(body);

    if (result) {
      return ResponseModel(res, 200, result, null);
    } else {
      return ResponseModel(res, 200, null, { msg: "Don't have phonenumber" });
    }
  };

  export const updatePassword = async (req: Request, res: Response) => {
    const body = req.body as UpdatePassword;
    const result = await UserService.updatePassword(body);

    if (result) {
      return ResponseModel(res, 200, result, null);
    } else {
      return ResponseModel(res, 200, null, { msg: "Can't update password" });
    }
  };

  export const getUser = async (req: Request, res: Response) => {
    const body = req.query as unknown as GetUser;
    const result = await UserService.getUser(body);

    if (result) {
      return res.status(200).json({
        data: result,
      });
    } else {
      return res.status(500).json({
        message: "User not found",
      });
    }
  };
}
