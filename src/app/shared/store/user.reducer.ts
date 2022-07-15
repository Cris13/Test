import {Action, createReducer, on} from '@ngrx/store';
import {createEntityAdapter, EntityState} from '@ngrx/entity';
import {User} from '../models/user';
import {loginActions} from '../../login/store/login.actions';

export type UserEntity = EntityState<User>;

export const adapter = createEntityAdapter<User>();
export const initialState: UserEntity = adapter.getInitialState();

export const userReducer = createReducer(
  initialState,
  on(loginActions.loginSuccess, (state, action) => {
    if(action.user){
      return adapter.addOne(action.user, state);
    }
    return state;
  }),
);

export const reducerFunc = (state: UserEntity | undefined, action: Action) => userReducer(state, action);
