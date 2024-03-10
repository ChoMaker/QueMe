import { connection } from "../../../config/db";
import { ReserveOrder } from "../../../models/reserveOrder";

type que_id = {
  id: number;
  user_id: number;
  table_id: number;
  event_id: number;
  status: boolean;
  date_and_time: Date;
  seat: number;
  type: string;
};

export namespace OrderService {
  export const reserveOrder = async (body: ReserveOrder) => {
    const [resultReserveOrder] = await (
      await connection
    ).query("SELECT * from que WHERE id=?", [body.que_id]);
    const resultQueId = (resultReserveOrder as que_id[])[0];

    if (resultQueId.id) {
      const [resultQue] = await (
        await connection
      ).query("INSERT INTO orders (food_id,que_id,quantity) VALUES (?,?,?)", [
        body.food_id,
        resultQueId.id,
        body.quantity,
      ]);
      return resultQue;
    }
  };
}
