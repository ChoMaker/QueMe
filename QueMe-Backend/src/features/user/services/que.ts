import { connection } from "../../../config/db";
import { GetQue } from "../../../models/getQue";
import { ReserveQue } from "../../../models/reserveQue";
import dayjs, { Dayjs } from "dayjs";
import { UploadPayslip } from "../../../models/uploadPayslip";
import multer from "multer";
import path from "path";
import { DeleteQue } from "../../../models/deleteQue";
import { UpdateStatus } from "../../../models/updateStatus";
import { UpdateAmount } from "../../../models/updateAmount";

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

type userData = {
  id: number;
  name: string;
  phone_number: string;
  password: string;
  create_at: Date;
};

type eventData = {
  id: number;
  name: string;
  event_start_date: Date;
  event_end_date: Date;
  image_url: string;
};

const isTableReservedForToday = async (
  tableId: number,
  dateTime: Date
): Promise<boolean> => {
  const onlyDate = dateTime.toLocaleString().split("T")[0];
  const a = new Date(onlyDate);
  const dateAdd = a.setDate(a.getDate() + 1);
  const [existingReservation] = await (
    await connection
  ).query(
    "SELECT * FROM que WHERE table_id = ? AND date_and_time BETWEEN ? AND ? AND status = 1",
    [tableId, onlyDate, new Date(dateAdd)]
  );

  const test = existingReservation as queData[];

  if (test.length) {
    return true;
  } else {
    return false;
  }
};

export namespace QueService {
  export const reserveQue = async (body: ReserveQue) => {
    const [resultQue] = await (
      await connection
    ).query(`
      SELECT * from tables WHERE zone='${body.zone}'and name='${body.name}'`);

    const table = (resultQue as tableData[])[0];

    if (!table) {
      throw new Error("Table not found for the given zone and name");
    }

    const isTableAlreadyReserved = await isTableReservedForToday(
      table.id,
      body.date_and_time
    );

    if (isTableAlreadyReserved) {
      throw new Error("The table is already reserved for today");
    }

    const resultTable = await (
      await connection
    ).query(
      "INSERT INTO que (user_id,table_id,event_id,status,date_and_time,seat,type) VALUES (?,?,?,?,?,?,?)",
      [
        body.user_id,
        table.id,
        body.event_id,
        true,
        new Date(body.date_and_time),
        body.seat,
        body.type,
      ]
    );

    const insertId = (resultTable[0] as ResultSetHeader).insertId;
    return insertId;
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
  };

  export const uploadPayslip = async (
    body: UploadPayslip,
    file: string | null
  ) => {
    const payslipData = await (
      await connection
    ).query("UPDATE que SET payslip_url = ? WHERE id = ?", [
      "src/assets/smlCard/" + file?.replace("uploads/", ""),
      body.queID,
    ]);
  };

  export const getAllQue = async () => {
    const [resultQue] = await (await connection).query("SELECT * from que");

    const allQue = resultQue as queData[];

    if (allQue.length > 0) {
      const [userData] = await (await connection).query("SELECT * FROM users");
      const [tableData] = await (
        await connection
      ).query("SELECT * FROM tables");
      const [eventData] = await (
        await connection
      ).query("SELECT * FROM events");
      const [orderData] = await (
        await connection
      ).query("SELECT * FROM orders");

      return { allQue, userData, tableData, eventData, orderData };
    }
  };

  export const deleteQue = async (body: DeleteQue) => {
    const que = await (
      await connection
    ).query("DELETE FROM que WHERE id=?", [body.queId]);
  };

  export const updateStatus = async (body: UpdateStatus) => {
    const { id, status } = body;
    const queStatus = await (
      await connection
    ).query("UPDATE que SET status = ? WHERE id = ?", [
      status ? 1 : 0,
      body.id,
    ]);
  };

  export const updateAmount = async (body: UpdateAmount) => {
    const queAmount = await (
      await connection
    ).query("UPDATE que SET amount=? WHERE id=?", [body.amount, body.queID]);
  };
}
