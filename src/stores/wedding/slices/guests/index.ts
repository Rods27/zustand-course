import { immer } from 'zustand/middleware/immer';
import { IGuestSlice } from './types';

export const createGuestSlice = immer<IGuestSlice>((set) => ({
  guestCount: 0,
  setGuestCount: (guestCount) => set({ guestCount: guestCount > 0 ? guestCount : 0 }),
}));
