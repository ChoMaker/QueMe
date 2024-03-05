import { Request, Response } from "express";
import { SignUpRequest } from "../../../models/signUpRequest";
import { UserService } from "../services/user";
import { SignInRequest } from "../../../models/signInRequest";
import { ForgotPassword } from "../../../models/forgotPassword";
import { UpdatePassword } from "../../../models/updatePassword";

export namespace UserController {
    export const signIn = async (req: Request, res:Response) => {
        const body = req.body as SignInRequest;
        const result = await UserService.signIn(body)

        if (result) {
            return res.status(200).json({
                message: "Login successfully"
            })
        }else {
            return res.status(500).json({
                message: "Password is incorrect"
            })
        }
    }

    export const signUp = async (req: Request, res:Response)=>{
        const body = req.body as SignUpRequest;
        const result = await UserService.signUp(body)
        
        if (result) {
            return res.status(200).json({
                message: "Create account successfully"
            })
        }else {
            return res.status(500).json({
                message: "Phonenumber has been already used"
            })
        }
    }
    
    export const forgotPassword = async (req: Request, res:Response) => {
        const body = req.body as ForgotPassword;
        const result = await UserService.forgotPassword(body)
        
        if (result) {
            return res.status(200).json({
                message: "Have phonenumber is system"
            })
        }else {
            return res.status(500).json({
                message: "Don't have phonenumber"
            })
        }
    }

    export const updatePassword = async (req: Request, res:Response) => {
        const body = req.body as UpdatePassword;
        const result = await UserService.updatePassword(body)
        
        if (result) {
            return res.status(200).json({
                message: "Update password successfully"
            })
        }else {
            return res.status(500).json({
                message: "Can't update password"
            })
        }
    }
 }