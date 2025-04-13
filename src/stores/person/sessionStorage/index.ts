import { createJSONStorage, persist, StateStorage } from 'zustand/middleware';

interface IPersonState {
  sessionFirstName: string;
  sessionLastName: string;
}

interface IActions {
  setSessionFirstName: (value: string) => void;
  setSessionLastName: (value: string) => void;
}

const sessionStorage: StateStorage = {
  getItem: function (name: string): string | null | Promise<string | null> {
    return sessionStorage.getItem(name);
  },
  setItem: function (name: string, value: string): unknown | Promise<unknown> {
    return sessionStorage.setItem(name, value);
  },
  removeItem: function (name: string): void | Promise<void> {
    console.log('removeItem', name);
  },
};

export const sessionPersonStore = persist<IPersonState & IActions>(
  (set) => ({
    sessionFirstName: '',
    sessionLastName: '',
    setSessionFirstName: (value: string) => set({ sessionFirstName: value }),
    setSessionLastName: (value: string) => set({ sessionLastName: value }),
  }),
  { name: 'person-storage', storage: createJSONStorage(() => sessionStorage) },
);
