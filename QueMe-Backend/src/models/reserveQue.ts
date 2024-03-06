export interface ReserveQue {
    user_id: number;
    table_id: number;
    event_id: number;
    status: boolean;
    date_and_time: Date;
    seat: number,
    type: string,
}