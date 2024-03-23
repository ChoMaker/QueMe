import { connection } from "../../../config/db";
import { GetQue } from "../../../models/getQue";
import { ReserveQue } from "../../../models/reserveQue";
import dayjs, { Dayjs } from "dayjs";
import { UploadPayslip } from "../../../models/uploadPayslip";
import multer from "multer";
import path from "path";
import { DeleteQue } from "../../../models/deleteQue";

type tableData = {
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

export namespace QueService {
  export const reserveQue = async (body: ReserveQue) => {
    const [resultQue] = await (
      await connection
    ).query(
      `SELECT * from tables WHERE zone='${body.zone}'and name='${body.name}' `
    );
    const table = (resultQue as tableData[])[0];

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

  export const getQue = async (body: GetQue) => {
    const [queData] = await (
      await connection
    ).query("SELECT * from que WHERE id=? and user_id=?", [
      body.queID,
      body.id,
    ]);
    const queData2 = (queData as queData[])[0];

    if (queData2.table_id) {
      const [tableData] = await (
        await connection
      ).query("SELECT * from tables WHERE id=?", [queData2.table_id]);
      const tableData2 = (tableData as tableData[])[0];
      return { queData2, tableData2 };
    }
    return null;
  };

  export const uploadPayslip = async (
    body: UploadPayslip,
    file: string | null
  ) => {
    const payslipData = await (
      await connection
    ).query("UPDATE que SET payslip_url = ? WHERE id=?", [file, body.que_id]);
  };

  export const getAllQue = async () => {
    const resultQue = await (await connection).query("SELECT * from que");
    return resultQue;
  };

  export const deleteQue = async (body: DeleteQue) => {
    const que = await (
      await connection
    ).query("DELETE FROM que WHERE id=?", [body.queId]);
  };
}
