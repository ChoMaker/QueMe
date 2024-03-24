import { connection } from "../../../config/db";
import { CreateEvent } from "../../../models/createEvent";
import { DeleteEvent } from "../../../models/deleteEvent";

type ResultSetHeader = {
  fieldCount: number;
  affectedRows: number;
  insertId: number;
  info: string;
  serverStatus: number;
  warningStatus: number;
  changedRows: number;
};

export namespace EventService {
  export const getEvents = async () => {
    const resultEvent = await (await connection).query(`SELECT * from events`);
    return resultEvent;
  };

  export const createEvent = async (body: CreateEvent, file: string | null) => {
    const eventData = await (
      await connection
    ).query(
      "INSERT INTO events (name,event_start_date,event_end_date,image_url) VALUES (?,?,?,?)",
      [body.name, body.event_start_date, body.event_end_date, file]
    );
    const insertId = (eventData[0] as ResultSetHeader).insertId;
    return insertId;
  };

  export const deleteEvent = async (body: DeleteEvent) => {
    const event = await (
      await connection
    ).query("DELETE FROM events WHERE id=?", [body.id]);
  };
}
