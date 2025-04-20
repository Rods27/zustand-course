import { create } from 'zustand';
import { sessionPersonStore } from './sessionStorage';
import { localStoragePersonStore } from './localStorage';

type TSliceTypes = ReturnType<typeof sessionPersonStore> &
  ReturnType<typeof localStoragePersonStore>;

export const usePersonStore = create<TSliceTypes>()((...props) => ({
  ...localStoragePersonStore(...props),
  ...sessionPersonStore(...props),
}));
