import { createAction, props } from '@ngrx/store';



export const signup = createAction(
    '[User] Signup',
    props<{ fname: string; lname: string; email: string; password: string }>()
  );
  
  export const signupSuccess = createAction('[User] Signup Success');
  export const signupFailure = createAction('[User] Signup Failure', props<{ error: any }>());

