import { connection } from "../../../config/db";

export namespace EventService {
  export const getEvents = async () => {
    const resultEvent = await (await connection).query(`SELECT * from events`);
    return resultEvent;
  };
}
