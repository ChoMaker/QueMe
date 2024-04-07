import { Request, Response } from "express";
import { ReserveOrder } from "../../../models/reserveOrder";
import { OrderService } from "../services/order";
import { GetOrder } from "../../../models/getOrder";
import { OrderData } from "../../../models/orderData";

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

  export const getOrder = async (req: Request, res: Response) => {
    const body = req.query as unknown as GetOrder;

    try {
      const result = await OrderService.getOrder(body);
      return res.status(200).json({
        result: {
          order: result?.orderData2,
          food: result?.foods,
        },
      });
    } catch (error) {
      return res.status(500).json({
        message: "No data",
      });
    }
  };

  // export const getOrderData = async (req: Request, res: Response) => {
  //   const body = req.body as OrderData;
  //   const error: Error = new Error("Error message");

  //   try {
  //     const result = await OrderService.getOrderData(body);
  //     return res.status(200).json({
  //       message: "Reserve que successfully",
  //       result: result,
  //     });
  //   } catch (error) {
  //     return res.status(500).json({
  //       message: "Can't reserve que",
  //       error: (error as any).message,
  //     });
  //   }
  // };
}
