import { create } from 'zustand';
import { sessionPersonStore } from './sessionStorage';
import { localStoragePersonStore } from './localStorage';
import { useWeddingStore } from '../wedding';

type TSliceTypes = ReturnType<typeof sessionPersonStore> &
  ReturnType<typeof localStoragePersonStore>;

export const usePersonStore = create<TSliceTypes>()((...props) => ({
  ...localStoragePersonStore(...props),
  ...sessionPersonStore(...props),
}));

usePersonStore.subscribe((next) => {
  const { firstName, lastName } = next;
  useWeddingStore.getState().setFirstName(firstName);
  useWeddingStore.getState().setLastName(lastName);
});
