import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Observable, of} from 'rxjs';
import {map, catchError, mergeMap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {loginActions} from './login.actions';
import {User} from '../../shared/models/user';


@Injectable()
export class LoginEffects {

  constructor(
    private actions$: Actions,
    private httpClient: HttpClient
  ) {
  }

  login$ = createEffect(() => this.actions$.pipe(
    ofType(loginActions.login),
    mergeMap((action) => this.getUsersByEmail(action.email).pipe(
        map(response => loginActions.loginSuccess({user: response[0]})),
        catchError(() => of(loginActions.loginSuccess({user: undefined})))
      ))
  ));


  private getUsersByEmail(email: string): Observable<User[]> {
    return this.httpClient.get<User[]>('https://jsonplaceholder.typicode.com/users?email=' + email);
  }

}
