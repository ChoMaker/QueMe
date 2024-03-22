import { connection } from "../../../config/db";
import { CreateEvent } from "../../../models/createEvent";
import { DeleteEvent } from "../../../models/deleteEvent";

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
    return true;
  };

  export const deleteEvent = async (body: DeleteEvent) => {
    const event = await (
      await connection
    ).query("DELETE FROM events WHERE id=?", [body.id]);
  };
}
