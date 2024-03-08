import { connection } from "../../../config/db";
import { AllFood } from "../../../models/allFood";
import dayjs, { Dayjs } from "dayjs";
import { SearchFood } from "../../../models/searchFood";

export namespace FoodService {
  export const getFoods = async () => {
    const resultFood = await (await connection).query(`SELECT * from foods`);
    return resultFood;
  };

  export const searchFoods = async (body: SearchFood) => {
    const [resultSearchFood] = await (
      await connection
    ).query(`SELECT * FROM foods WHERE name LIKE '%${body.name}%' `, [
      body.name,
    ]);
    console.log(resultSearchFood);
    const allfoods = resultSearchFood as any;
    if (allfoods) {
      return resultSearchFood;
    }
    return false;
  };
}
