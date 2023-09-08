import { createAction, props } from '@ngrx/store';
import { User } from './dashboard.state'; 

export const loadUsers = createAction('[Dashboard] Load Users');
export const loadUsersSuccess = createAction('[Dashboard] Load Users Success', props<{ users: User[] }>());
export const loadUsersFailure = createAction('[Dashboard] Load Users Failure', props<{ error: any }>());


export const createUser = createAction('[Dashboard] Create User',props<{ fname: string; lname: string; email: string; password: string }>());

export const updateUser = createAction(
    '[Dashboard] Update User',
    props<{ user: Partial<User> }>()
  );
  
  export const updateUserSuccess = createAction(
    '[Dashboard] Update User Success',
    props<{ user: User }>()
  );
  
  export const updateUserFailure = createAction(
    '[Dashboard] Update User Failure',
    props<{ error: string }>()
  );
  
export const deleteUser = createAction('[Dashboard] Delete User', props<{ userId: string }>());