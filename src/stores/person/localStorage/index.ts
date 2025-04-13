import { persist } from 'zustand/middleware';

interface IPersonState {
  firstName: string;
  lastName: string;
}

interface IActions {
  setFirstName: (value: string) => void;
  setLastName: (value: string) => void;
}

export const localStoragePersonStore = persist<IPersonState & IActions>(
  (set) => ({
    firstName: '',
    lastName: '',
    setFirstName: (value: string) => set({ firstName: value }),
    setLastName: (value: string) => set({ lastName: value }),
  }),
  { name: 'person-storage' },
);
