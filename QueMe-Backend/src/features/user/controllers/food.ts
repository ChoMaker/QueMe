import { Request, Response } from "express";
import { AllFood } from "../../../models/allFood";
import { FoodService } from "../services/food";

export namespace FoodController {
  export const getFoods = async (req: Request, res: Response) => {
    const body = req.body as AllFood;

    try {
      const result = await FoodService.getFoods();
      return res.status(200).json({
        data: result,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Can't get all foods",
      });
    }
  };
}
