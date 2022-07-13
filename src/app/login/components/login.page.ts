import { Component, OnInit } from '@angular/core';
import {loginActions} from '../store/login.actions';
import {Store} from '@ngrx/store';
import {AppState} from '../../shared/store/app-state';
import {selectCurrentUser} from '../store/login.selectors';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public email = '';

  constructor(private router: Router, private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select(selectCurrentUser).pipe(
      map((currentUser) => {
        if(currentUser.length > 0){
          this.router.navigate(['tabs/tab1']);
        }
      })
    ).subscribe();
  }

  signIn(){
    this.store.dispatch(loginActions.login({ email: this.email }));
  }

}
