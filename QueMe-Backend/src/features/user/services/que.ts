import { connection } from "../../../config/db";
import { ReserveQue } from "../../../models/reserveQue";
import dayjs, { Dayjs } from "dayjs";

export namespace QueService {
    export const reserveQue = async (body: ReserveQue) => {
        try {
            const [resultQue] = await (await connection).query("INSERT INTO que (user_id,table_id,event_id,status,date_and_time,seat,type) VALUES (?,?,?,?,?,?,?)", [body.user_id,body.table_id,body.event_id,body.status,body.date_and_time,body.seat,body.type]);
            const que = (resultQue as ReserveQue[])[0]
            return true; 
        } catch (error) {
            return false;
        }
    }
}