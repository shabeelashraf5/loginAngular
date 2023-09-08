import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap,  mergeMap } from 'rxjs/operators';
import { DashboardService } from '../dashboard.service';
import { loadUsers, loadUsersSuccess, loadUsersFailure, createUser, updateUser, deleteUser } from './dashboard.action';
import { User } from './dashboard.state';
import * as DashboardActions from './dashboard.action'




@Injectable()
export class DashboardEffects {
  loadUsers$ = createEffect(() =>
  this.actions$.pipe(
    ofType(loadUsers),
    switchMap(() => {
      console.log('Fetching users...'); // Add this log
      return this.dashboardService.getUsers().pipe(
        map((users) => {
          console.log('Users fetched:', users); // Add this log
          return loadUsersSuccess({ users });
        }),
        catchError((error) => of(loadUsersFailure({ error })))
      );
    })
  )
);


createUser$ = createEffect(() =>
  this.actions$.pipe(
    ofType(createUser),
    switchMap(({ fname, lname, email, password }) => {
      console.log('Creating user...');
      const user: Partial<User> = { fname, lname, email, password }; // Use Partial<User> here
      return this.dashboardService.createUser(user as User).pipe( // Cast it back to User
        map(() => {
          console.log('User created successfully');
          return loadUsers(); // Trigger a load after create
        }),
        catchError((error) => of(loadUsersFailure({ error })))
      );
    })
  )
);

updateUser$ = createEffect(() =>
this.actions$.pipe(
  ofType(DashboardActions.updateUser),
  mergeMap(({ user }) =>
    this.dashboardService.updateUser(user).pipe(
      map((updatedUser) => DashboardActions.updateUserSuccess({ user: updatedUser })),
      catchError((error) => of(DashboardActions.updateUserFailure({ error: error.message })))
    )
  )
)
);


  deleteUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteUser),
      switchMap(({ userId }) => {
        console.log('Deleting user...'); // Add this log
        return this.dashboardService.deleteUser(userId).pipe(
          map(() => {
            console.log('User deleted:', userId); // Add this log
            return loadUsers(); // Trigger a load after delete
          }),
          catchError((error) => of(loadUsersFailure({ error })))
        );
      })
    )
  );


  constructor(private actions$: Actions, private dashboardService: DashboardService) {}
}
