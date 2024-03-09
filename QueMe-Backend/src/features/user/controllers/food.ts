import { Request, Response } from "express";
import { AllFood } from "../../../models/allFood";
import { SearchFood } from "../../../models/searchFood";
import { FoodService } from "../services/food";

export namespace FoodController {
  export const getFoods = async (req: Request, res: Response) => {
    try {
      const result = await FoodService.getFoods();
      return res.status(200).json({
        message: "Can get all foods",
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
