import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as UsersActions from '../store/signup.action';
import { SignupService } from '../signup.service';
import { Router } from '@angular/router';

@Injectable()
export class UsersEffects {
  constructor(private actions$: Actions, private userService: SignupService, private router: Router) {}

  signup$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActions.signup),
      mergeMap((action) =>
        this.userService.signup(action).pipe(
          map(() => {
      
            this.router.navigate(['/login']);
            return UsersActions.signupSuccess();
          }),
          catchError((error) => of(UsersActions.signupFailure({ error })))
        )
      )
    )
  );



}