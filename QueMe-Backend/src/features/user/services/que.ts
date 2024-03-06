import { connection } from "../../../config/db";
import { ReserveQue } from "../../../models/reserveQue";
import dayjs, { Dayjs } from "dayjs";

type table_id = {
    id: number;
    zone: string;
    name: string;
}

type que_id = {
    insertId: number;
}

type queId = {
    ResultSetHeader: que_id;
}

export namespace QueService {
    export const reserveQue = async (body: ReserveQue) => {
        try {
            const [resultQue] = await (await connection).query(`SELECT * from tables WHERE zone='${body.zone}'and name='${body.name}' `)
            const table = (resultQue as table_id[])[0]
            console.log(table.id)

            if (table) {
                const [resultTable] = await (await connection).query("INSERT INTO que (user_id,table_id,event_id,status,date_and_time,seat,type) VALUES (?,?,?,?,?,?,?)", [body.user_id,table.id,body.event_id,body.status,body.date_and_time,body.seat,body.type]);
                //const que = (resultTable as queId[])[0]
                //console.log(que)
                return true;
            }else {
                return false;
            }
        } catch (error) {
            console.log(error)
            return false;
        }
    }
}