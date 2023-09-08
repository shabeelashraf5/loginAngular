import { User } from '../../../model/users.model';

export interface LoginState {
  user: User | null;
  error: string | null;
}

export const initialUserState: LoginState = {
  user: null,
  error: null,
};