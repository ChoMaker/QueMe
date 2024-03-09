import { Request, Response } from "express";
import { ReserveOrder } from "../../../models/reserveOrder";
import { OrderService } from "../services/order";

export namespace OrderController {
  export const reserveOrder = async (req: Request, res: Response) => {
    const body = req.body as ReserveOrder;

    try {
      const result = await OrderService.reserveOrder(body);
      return res.status(200).json({
        message: "Reserve order successfully",
      });
    } catch (error) {
      return res.status(404).json({
        message: "Can't reserve order",
      });
    }
  };
}
