import { create } from 'zustand';

type TBearNames = 'blackBears' | 'polarBears' | 'pandaBears';

type TBears = Record<TBearNames, number>;

interface IBearState extends TBears {
  increaseBears: (by: number, name: TBearNames) => void;
}

export const useBearStore = create<IBearState>()((set) => ({
  blackBears: 0,
  polarBears: 0,
  pandaBears: 0,
  increaseBears: (by: number, name: TBearNames) => set((state) => ({ [name]: state[name] + by })),
}));
