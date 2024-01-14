import { RootState } from '../types';

export const getIsReposFetching = (state: RootState) => state.repos.isFetching;
export const getIsReposError = (state: RootState) => state.repos.isError;
export const getRepos = (state: RootState) => state.repos.repos;