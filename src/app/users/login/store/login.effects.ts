import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as UsersActions from './login.action';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Injectable()
export class LoginEffects {
  constructor(private actions$: Actions, private userService: LoginService, private router: Router) {}


   login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActions.login),
      mergeMap((action) =>
        this.userService.login(action.email, action.password).pipe(
          map((user) => {
          
            this.router.navigate(['/homepage']);
            return UsersActions.loginSuccess({ user });
          }),
          catchError((error) => of(UsersActions.loginFailure({ error })))
        )
      )
    )
  ); 






}
