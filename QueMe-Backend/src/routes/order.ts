import express, { Request, Response } from "express";
import { OrderController } from "../features/user/controllers/order";
import exp from "constants";

export const orderRouter = express.Router();
orderRouter.post("/qm/reserveorder", OrderController.reserveOrder);
