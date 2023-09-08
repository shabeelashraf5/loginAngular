import { createReducer, on } from '@ngrx/store';
import * as UsersActions from './login.action';
import { User } from '../../../model/users.model';

export interface UserState {
  user: User | null;
  error: string | null;
}

export const initialState: UserState = {
  user: null,
  error: null,
};


export const loginReducer = createReducer(
  initialState,
  on(UsersActions.loginSuccess, (state, { user }) => ({ ...state, user, error: null })),
  on(UsersActions.loginFailure, (state, { error }) => ({ ...state, user: null, error }))
);