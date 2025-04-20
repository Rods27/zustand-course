export interface IDateSlice {
  eventDate: string;
  eventTime: string;
  setEventDate: (date: string) => void;
  setEventTime: (time: string) => void;
}
