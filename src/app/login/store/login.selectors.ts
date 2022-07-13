import {adapter, UserEntity} from '../../shared/store/user.reducer';
import {createFeatureSelector, createSelector} from '@ngrx/store';


const featureKey = 'currentUser';
const { selectAll } = adapter.getSelectors();
export const selectFeatureCurrentUser = createFeatureSelector<UserEntity>(featureKey);
export const selectCurrentUser = createSelector(selectFeatureCurrentUser, selectAll);
