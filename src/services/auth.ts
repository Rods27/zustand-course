import { AxiosError } from 'axios';
import { api } from 'src/api';
import { IUser } from 'src/interfaces';

export interface LoginResponse extends IUser {
  token: string;
}

export const login = async (email: string, password: string) => {
  try {
    const { data } = await api.post<LoginResponse>('/auth/login', {
      email,
      password,
    });

    return data;
  } catch (err) {
    if (err instanceof AxiosError) {
      console.log(err.response?.data);
      throw new Error(err.response?.data);
    }
    throw new Error('Unable to login');
  }
};
