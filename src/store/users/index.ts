import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Thunk } from '../types';
import { IUser, ISlice, IGithubUsersResponse } from './types';
import GithubService from '../../services/GithubService';

export const initialState: ISlice = {
    users: [],
    isFetching: false,
    isError: false,
}

const slice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        request(state) {
            state.isFetching = true;
        },
        success(state, action: PayloadAction<IUser[]>) {
            state.isFetching = false;
            state.isError = false;
            state.users = action.payload;
        },
        failure(state) {
            state.isFetching = false;
            state.isError = true;
        },
    },
})

export const { reducer } = slice;

export const { request, success, failure } = slice.actions;

export const filterUsersData = (data: IGithubUsersResponse['data']) => {
    if (!data.items || !data.items.length) return [];
    return data.items.map((item: any) => (
        {
            id: item.id,
            login: item.login,
            htmlUrl: item.html_url,
            reposUrl: item.repos_url
        }
    ))
}

export const fetchUsers = (search: string): Thunk => {
    const service = GithubService.getInstance();
    return async (dispatch) => {
        dispatch(request());
        try {
            const { data } = await service.fetchUsers(search);
            dispatch(success(filterUsersData(data)));
        } catch (e) {
            console.error(e);
            dispatch(failure());
        }
    }
}