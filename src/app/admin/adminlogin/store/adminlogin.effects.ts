import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as AdminLoginActions from './adminlogin.action';
import { AdminloginService } from '../adminlogin.service';
import { Router } from '@angular/router';

@Injectable()
export class AdminLoginEffects {
  constructor(private actions$: Actions, private adminLoginService: AdminloginService, private router: Router ) {}

  login$ = createEffect(() =>
  this.actions$.pipe(
    ofType(AdminLoginActions.login),
    mergeMap((action) =>
      this.adminLoginService.login(action.email, action.password).pipe(
        map(() => {
          this.router.navigate(['/admin/dashboard']); 
          return AdminLoginActions.loginSuccess();
        }),
        catchError((error) => of(AdminLoginActions.loginFailure({ error: error.message })))
      )
    )
  )
);

 
}