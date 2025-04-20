import { create } from 'zustand';
import {
  createPersonSlice,
  createGuestSlice,
  createDateSlice,
  createConfirmationSlice,
} from './slices';
import { persist } from 'zustand/middleware';

type TSliceTypes = ReturnType<typeof createPersonSlice> &
  ReturnType<typeof createGuestSlice> &
  ReturnType<typeof createDateSlice> &
  ReturnType<typeof createConfirmationSlice>;

export const useWeddingStore = create<TSliceTypes>()(
  persist(
    (...rest) => ({
      ...createPersonSlice(...rest),
      ...createGuestSlice(...rest),
      ...createDateSlice(...rest),
      ...createConfirmationSlice(...rest),
    }),
    { name: 'wedding-storage' },
  ),
);
