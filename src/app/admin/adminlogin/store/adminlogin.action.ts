import { createAction, props } from '@ngrx/store';

export const login = createAction(
  '[AdminLogin] Login',
  props<{ email: string; password: string }>()
);

export const loginSuccess = createAction('[AdminLogin] Login Success');
export const loginFailure = createAction('[AdminLogin] Login Failure', props<{ error: string }>());
export const logout = createAction('[AdminLogin] Logout');