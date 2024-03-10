import { Request, Response } from "express";
import { ReserveOrder } from "../../../models/reserveOrder";
import { OrderService } from "../services/order";

const ReserveData: { food_id: number; que_id: number; quantity: number }[] = [];

export namespace OrderController {
  export const reserveOrder = async (req: Request, res: Response) => {
    const body = req.body as {
      food_id: number;
      que_id: number;
      quantity: number;
    }[];

    if (!Array.isArray(body)) {
      return res.status(400).json({
        message: "Invalid data format. Expecting an array of orders.",
      });
    }

    try {
      const result = await OrderService.reserveOrder(body);
      ReserveData.push(...body);
      return res.status(200).json({
        message: "Reserve order successfully",
      });
    } catch (error) {
      return res.status(500).json({
        message: "Can't reserve order",
      });
    }
  };
}
