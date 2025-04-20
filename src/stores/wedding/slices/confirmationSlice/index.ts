import { immer } from 'zustand/middleware/immer';
import { IConfirmationSlice } from './types';

export const createConfirmationSlice = immer<IConfirmationSlice>((set) => ({
  isConfirmed: false,
  setIsConfirmed: (value) =>
    set((state) => {
      state.isConfirmed = value;
    }),
}));
