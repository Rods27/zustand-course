import { immer } from 'zustand/middleware/immer';
import { IPersonSlice } from './types';

export const createPersonSlice = immer<IPersonSlice>((set) => ({
  firstName: '',
  lastName: '',
  setFirstName: (firstName) =>
    set((state) => {
      state.firstName = firstName;
    }),
  setLastName: (lastName) =>
    set((state) => {
      state.lastName = lastName;
    }),
}));
