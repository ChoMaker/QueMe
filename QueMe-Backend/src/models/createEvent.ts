import { events } from "@syncfusion/ej2-vue-calendars";

export interface CreateEvent {
  id: number;
  name: string;
  event_start_date: Date;
  event_end_date: Date;
}
