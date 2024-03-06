export interface ReserveQue {
    user_id: number;
    zone: string;
    name: string;
    event_id: number;
    status: boolean;
    date_and_time: Date;
    seat: number,
    type: string,
}