import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { repoCardMockData } from '../../../mocks/repoCardMockData';
import { GithubServiceMock, getInstanceMock } from '../../../mocks/GithubServiceMock';
import GithubService from '../../../../src/services/GithubService';
jest.mock('../../../../src/services/GithubService', () => ({
    __esModule: true,
    default: {
        GithubServiceMock,
        getInstance: getInstanceMock
    },
}));

import { reducer, request, success, failure, initialState, fetchRepos } from '../../../../src/store/repos/index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('repos slice', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, { type: undefined })).toEqual(initialState);
    });

    it('should handle request action', () => {
        const expectedState = { ...initialState, isFetching: true };
        expect(reducer(initialState, request())).toEqual(expectedState);
    });

    it('should handle success action', () => {
        const mockData = { data: [repoCardMockData], page: 2, hasMore: true };
        const expectedState = { ...initialState, isFetching: false, isError: false, repos: mockData };
        expect(reducer(initialState, success(mockData))).toEqual(expectedState);
    });

    it('should handle failure action', () => {
        const expectedState = { ...initialState, isFetching: false, isError: true };
        expect(reducer(initialState, failure())).toEqual(expectedState);
    });
});

describe('fetchRepos thunk', () => {
    beforeEach (() => {
        const mockData = { data: [repoCardMockData], page: 2, hasMore: true };
        (GithubService.getInstance as jest.Mock).mockImplementation(() => ({
            fetchRepos: jest.fn().mockResolvedValue(mockData)
        }));
    })
    afterEach(() => {
        jest.restoreAllMocks();
    });

    it('dispatches success action on fetch success', async () => {
        const store = mockStore({});
        await store.dispatch(fetchRepos('user'));

        const actions = store.getActions();
        expect(actions[0]).toEqual(request());
        expect(actions[1]).toEqual(success({
            data: expect.any(Array),
            page: 1,
            hasMore: false
        }));
    });

    it('dispatches failure action on fetch failure', async () => {
        const store = mockStore({});
        (GithubService.getInstance as jest.Mock).mockImplementation(() => ({
            fetchRepos: jest.fn().mockRejectedValue(new Error('Error message'))
        }));
        await store.dispatch(fetchRepos('user')); 
        const actions = store.getActions();

        expect(actions[0]).toEqual(request());
        expect(actions[1]).toEqual(failure());
    });
});