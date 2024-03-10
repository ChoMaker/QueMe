import { connection } from "../../../config/db";
import { GetOrder } from "../../../models/getOrder";
import { ReserveOrder } from "../../../models/reserveOrder";

type queData = {
  id: number;
  user_id: number;
  table_id: number;
  event_id: number;
  status: boolean;
  date_and_time: Date;
  seat: number;
  type: string;
};

type orderData = {
  id: number;
  food_id: number;
  que_id: number;
  quantity: number;
};

type foodData = {
  id: number;
  name: string;
  quantity: number;
};

export namespace OrderService {
  export const reserveOrder = async (orders: ReserveOrder[]) => {
    const resultQueArray: queData[] = [];

    for (const order of orders) {
      const [resultReserveOrder] = await (
        await connection
      ).query("SELECT * from que WHERE id=?", [order.que_id]);
      const resultQueId = (resultReserveOrder as queData[])[0];

      if (resultQueId.id) {
        const resultQue = await (
          await connection
        ).query("INSERT INTO orders (food_id,que_id,quantity) VALUES (?,?,?)", [
          order.food_id,
          resultQueId.id,
          order.quantity,
        ]);

        resultQueArray.push(resultQueId);
      }
    }
  };

  export const getOrder = async (body: GetOrder) => {
    const foods = [];
    const [orderData] = await (
      await connection
    ).query("SELECT * from orders WHERE que_id=?", [body.queID]);
    const orderData2 = orderData as orderData[];
    //console.log(orderData2);

    const ids = orderData2.map(({ food_id }) => food_id);
    const filtered = orderData2.filter(
      ({ food_id }, index) => !ids.includes(food_id, index + 1)
    );

    for (const orders of filtered) {
      const [foodData] = await (
        await connection
      ).query("SELECT *,id as food_id from foods WHERE id=?", [orders.food_id]);
      const foodData2 = (foodData as foodData[])[0];
      foods.push(foodData2);
    }

    return { orderData2, foods };
  };
}
