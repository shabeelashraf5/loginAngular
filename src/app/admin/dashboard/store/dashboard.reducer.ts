import { Action, createReducer, on } from '@ngrx/store';
import { loadUsersSuccess, createUser, updateUser, deleteUser } from './dashboard.action';
import { User } from './dashboard.state';
import * as DashboardActions from './dashboard.action'


export const initialState: User[] = []; // Define initial state

export const dashboardReducer = createReducer(
  initialState,
  on(loadUsersSuccess, (state, { users }) => [...users]),
  on(createUser, (state, { fname, lname, email, password }) => [
    ...state,
    {  _id: '', fname, lname, email, password }
  ]), // Add a new user
  on(DashboardActions.updateUserSuccess, (state, { user }) => {
    return state.map((u) => (u._id === user._id ? { ...u, ...user } : u));
  }),
  on(deleteUser, (state, { userId }) => state.filter((user) => user._id !== userId)) // Remove deleted user
);


export function reducer(state: User[] | undefined, action: Action) {
  return dashboardReducer(state, action);
}
