import {UserEntity} from './user.reducer';
import {Post} from '../models/post';

export interface AppState {
  currentUser: UserEntity;
  posts: Post[];
}
