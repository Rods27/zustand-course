import { IAuthState } from './types';
import { create } from 'zustand';
import { checkStatus, login } from 'src/services';
import { persist } from 'zustand/middleware';

export const useAuthStore = create<IAuthState>()(
  persist(
    (set) => ({
      status: 'pending',
      token: undefined,
      user: undefined,
      loginUser: async (email: string, password: string) => {
        try {
          const { token, ...user } = await login(email, password);
          set({ status: 'authorized', token, user });
        } catch (error) {
          set({ status: 'unauthorized', token: undefined, user: undefined });
          throw 'Unauthorized';
        }
      },
      checkAuthStatus: async () => {
        try {
          const { token, ...user } = await checkStatus();
          set({ status: 'authorized', token, user });
        } catch (error) {
          set({ status: 'unauthorized', token: undefined, user: undefined });
        }
      },
      logoutUser: () => {
        set({ status: 'unauthorized', token: undefined, user: undefined });
      },
    }),
    { name: 'auth-storage' },
  ),
);
