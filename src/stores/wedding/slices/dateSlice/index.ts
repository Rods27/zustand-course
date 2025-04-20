import { immer } from 'zustand/middleware/immer';
import { IDateSlice } from './types';

export const createDateSlice = immer<IDateSlice>((set) => ({
  eventDate: '',
  eventTime: '',
  setEventDate: (date) =>
    set((state) => {
      state.eventDate = date;
    }),
  setEventTime: (time) =>
    set((state) => {
      state.eventTime = time;
    }),
}));
