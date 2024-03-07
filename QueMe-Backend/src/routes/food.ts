import express, { Request, Response } from "express";
import { FoodController } from "../features/user/controllers/food";

export const foodRouter = express.Router();
foodRouter.get("/gm/getfoods", FoodController.getFoods);
