import { IUser } from 'src/interfaces';

type TAuthStatus = 'authorized' | 'unauthorized' | 'pending';

export interface IAuthState {
  status: TAuthStatus;
  token?: string;
  user?: IUser;
  loginUser: (email: string, password: string) => Promise<void>;
  checkAuthStatus: () => Promise<void>;
  logoutUser: () => void;
}
