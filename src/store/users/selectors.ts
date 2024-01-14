import { RootState } from '../types';

export const getIsUsersFetching = (state: RootState) => state.users.isFetching;
export const getIsUsersError = (state: RootState) => state.users.isError;
export const getUsers = (state: RootState) => state.users.users;