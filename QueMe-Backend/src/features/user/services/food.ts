import { connection } from "../../../config/db";
import { AllFood } from "../../../models/allFood";
import dayjs, { Dayjs } from "dayjs";

export namespace FoodService {
  export const getFoods = async (body: AllFood) => {
    const resultFood = await (await connection).query(`SELECT * from foods`);
    return resultFood;
  };
}
