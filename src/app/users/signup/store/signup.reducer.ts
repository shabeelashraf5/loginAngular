import { createReducer, on } from '@ngrx/store';
import * as UsersActions from './signup.action';
import { User } from '../../../model/users.model';

export interface UserState {
  user: User | null;
  error: string | null;
}

export const initialState: UserState = {
  user: null,
  error: null,
};

export const userReducer = createReducer(
  initialState,
  on(UsersActions.signupSuccess, (state) => ({ ...state })),
  on(UsersActions.signupFailure, (state, { error }) => ({ ...state, error }))
);

