import { combineReducers } from 'redux';
import { reducer as users } from './users';
import { reducer as repos } from './repos';

const reducers = {
    users,
    repos
}

export const appReducer = combineReducers(reducers);