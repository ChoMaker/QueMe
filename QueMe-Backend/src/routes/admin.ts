import express, { Request, Response } from "express";
import { AdminController } from "../features/user/controllers/admin";

export const adminRouter = express.Router();
adminRouter.post("/qm/signinadmin", AdminController.signInAdmin);
