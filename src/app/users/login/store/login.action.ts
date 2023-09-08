import { createAction, props } from '@ngrx/store';
import { User } from '../../../model/users.model';


export const login = createAction(
    '[User] Login',
    props<{ email: string; password: string }>()
  );
  
  export const loginSuccess = createAction('[User] Login Success', props<{ user: User }>());
  export const loginFailure = createAction('[User] Login Failure', props<{ error: any }>());