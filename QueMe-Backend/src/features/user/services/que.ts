import { connection } from "../../../config/db";
import { ReserveQue } from "../../../models/reserveQue";
import dayjs, { Dayjs } from "dayjs";

type table_id = {
  id: number;
  zone: string;
  name: string;
};

type ResultSetHeader = {
  fieldCount: number;
  affectedRows: number;
  insertId: number;
  info: string;
  serverStatus: number;
  warningStatus: number;
  changedRows: number;
};

export namespace QueService {
  export const reserveQue = async (body: ReserveQue) => {
    const [resultQue] = await (
      await connection
    ).query(
      `SELECT * from tables WHERE zone='${body.zone}'and name='${body.name}' `
    );
    const table = (resultQue as table_id[])[0];

    if (table) {
      const resultTable = await (
        await connection
      ).query(
        "INSERT INTO que (user_id,table_id,event_id,date_and_time,seat,type) VALUES (?,?,?,?,?,?)",
        [
          body.user_id,
          table.id,
          body.event_id,
          new Date(body.date_and_time),
          body.seat,
          body.type,
        ]
      );
      const insertId = (resultTable[0] as ResultSetHeader).insertId;
      return insertId;
    }
  };
}
