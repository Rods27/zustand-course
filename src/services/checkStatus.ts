import { api } from 'src/api';
import { LoginResponse } from './auth';

export const checkStatus = async () => {
  try {
    const { data } = await api.get<LoginResponse>('auth/check-status');
    return data;
  } catch (error) {
    throw new Error('Unable to check status');
  }
};
