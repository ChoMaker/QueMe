import { Request, Response } from "express";
import { AllFood } from "../../../models/allFood";
import { FoodService } from "../services/food";
import { SearchFood } from "../../../models/searchFood";

export namespace FoodController {
  export const getFoods = async (req: Request, res: Response) => {
    const body = req.body as AllFood;

    try {
      const result = await FoodService.getFoods();
      return res.status(200).json({
        data: result,
      });
    } catch (error) {
      return res.status(404).json({
        message: "Can't get all foods",
      });
    }
  };

  export const searchFoods = async (req: Request, res: Response) => {
    const body = req.body as SearchFood;

    try {
      const result = await FoodService.searchFoods(body);
      return res.status(200).json({
        data: result,
      });
    } catch (error) {
      return res.status(404).json({
        message: "Search not found",
      });
    }
  };
}
