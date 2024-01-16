import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Thunk } from '../types';
import { ISlice, IGithubReposResponse, IReposSlice } from './types';
import GithubService from '../../services/GithubService';

export const initialState: ISlice = {
    repos: {
        data: [],
        page: 1,
        hasMore: false
    },
    isFetching: false,
    isError: false,
}

const slice = createSlice({
    name: 'repos',
    initialState,
    reducers: {
        request(state) {
            state.isFetching = true;
        },
        success(state, action: PayloadAction<IReposSlice>) {
            state.isFetching = false;
            state.isError = false;
            state.repos = action.payload;
        },
        failure(state) {
            state.isFetching = false;
            state.isError = true;
        },
    },
})

export const { reducer } = slice;

export const { request, success, failure } = slice.actions;

export const filterReposData = (data: IGithubReposResponse['data']) => {
    if (!data || !data.length) return [];
    return data.map((item: any) => {
        const language = item.language !== 'JavaScript' && item.language !== 'HTML' && item.language !== 'CSS' ?
            'Other' : item.language;
        let langColor = '#502cdd';
        switch (language) {
            case 'JavaScript':
                langColor = '#f1e05a';
                break;
            case 'HTML':
                langColor = '#e34c26';
                break;
            case 'TypeScript':
                langColor = '#2665e3';
                break;
            case 'CSS':
                langColor = '#563d7c';
                break;
            case 'Other':
                langColor = '#502cdd';
                break;
        }
        return {
            title: item.name,
            repoLink: item.html_url,
            isFork: item.fork,
            stars: item.stargazers_count,
            desc: item.description,
            logoColor: langColor,
            lang: language,
            time: item.updated_at ? new Date(item.updated_at.split('T')[0]).toLocaleDateString() : ''
        };
    })
}

export const fetchRepos = (login: string, page = 1): Thunk => {
    const service = GithubService.getInstance();
    return async (dispatch) => {
        dispatch(request());
        try {
            const { data, headers } = await service.fetchRepos(login, { per_page: '5', page: `${page}`});
            const linkHeader = headers && headers.get('link');
            let hasMore = false;
            if (linkHeader) {
            const links = linkHeader.split(',').map((a) => a.split(';'));
                for (const link of links) {
                    if (link[1].includes('rel="next"')) {
                        hasMore = true;
                        break;
                    }
                }
            }
            dispatch(success({
                data: filterReposData(data),
                page: page,
                hasMore
            }));
        } catch (e) {
            console.error(e);
            dispatch(failure());
        }
    }
}