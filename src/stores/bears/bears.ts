import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type TBearNames = 'blackBears' | 'polarBears' | 'pandaBears';

type TBears = Record<TBearNames, number>;

interface IBears {
  id: number;
  bear: string;
}

interface IBearState extends TBears {
  bearCount: () => number;
  increaseBears: (by: number, name: TBearNames) => void;
  doNothing: () => void;
  bears: IBears[];
  addBears: () => void;
  clearBears: () => void;
}

export const useBearStore = create<IBearState>()(
  persist(
    (set, get) => ({
      blackBears: 0,
      polarBears: 0,
      pandaBears: 0,
      bears: [{ id: 1, bear: 'Bear' }],
      bearCount: () => get().blackBears + get().pandaBears + get().polarBears + get().bears.length,
      increaseBears: (by: number, name: TBearNames) =>
        set((state) => ({ [name]: state[name] + by })),
      doNothing: () => set((state) => ({ bears: [...state.bears] })),
      addBears: () =>
        set((state) => ({
          bears: [
            ...state.bears,
            { id: state.bears.length + 1, bear: `Bear ${state.bears.length + 1}` },
          ],
        })),
      clearBears: () => set({ bears: [] }),
    }),
    { name: 'bears-store' },
  ),
);
