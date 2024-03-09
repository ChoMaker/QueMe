import { connection } from "../../../config/db";
import { ReserveOrder } from "../../../models/reserveOrder";

export namespace OrderService {
  export const reserveOrder = async (body: ReserveOrder) => {
    const resultReserveOrder = await (await connection).query(``);
    return true;
  };
}
