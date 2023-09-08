
import { createReducer, on } from '@ngrx/store';
import { loginSuccess, loginFailure, logout } from './adminlogin.action';
import { AdminLoginState, initialAdminLoginState } from './adminlogin.state';

export const adminLoginReducer = createReducer(
  initialAdminLoginState,
  on(loginSuccess, (state) => ({ ...state, loggedIn: true, error: null })),
  on(loginFailure, (state, { error }) => ({ ...state, loggedIn: false, error })),
  on(logout, () => initialAdminLoginState)
);
