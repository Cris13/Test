import {createAction, props} from '@ngrx/store';
import {User} from '../../shared/models/user';

export const loginActions = {
  login: createAction('login', props<{ email: string }>()),

  loginSuccess: createAction('login success', props<{ user: User }>()),
};
