import { User } from '../../../model/users.model';

export interface UserState {
  user: User | null;
  error: string | null;
}

export const initialUserState: UserState = {
  user: null,
  error: null,
};


