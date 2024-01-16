import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { usersMockData, usersRawMockData } from '../../../mocks/usersMockData';
import { GithubServiceMock, getInstanceMock } from '../../../mocks/GithubServiceMock';
import GithubService from '../../../../src/services/GithubService';
jest.mock('../../../../src/services/GithubService', () => ({
    __esModule: true,
    default: {
        GithubServiceMock,
        getInstance: getInstanceMock
    },
}));

import { reducer, request, success, failure, initialState, fetchUsers } from '../../../../src/store/users/index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('users slice', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, { type: undefined })).toEqual(initialState);
    });

    it('should handle request action', () => {
        const expectedState = { ...initialState, isFetching: true };
        expect(reducer(initialState, request())).toEqual(expectedState);
    });

    it('should handle success action', () => {
        const mockData = usersMockData;
        const expectedState = { ...initialState, isFetching: false, isError: false, users: mockData };
        expect(reducer(initialState, success(mockData))).toEqual(expectedState);
    });

    it('should handle failure action', () => {
        const expectedState = { ...initialState, isFetching: false, isError: true };
        expect(reducer(initialState, failure())).toEqual(expectedState);
    });
});

describe('fetchUsers thunk', () => {
    beforeEach (() => {
        const mockData = { data: {
            items: usersRawMockData
        }};
        (GithubService.getInstance as jest.Mock).mockImplementation(() => ({
            fetchUsers: jest.fn().mockImplementation(() => {
                return Promise.resolve(mockData)
            })
        }));
    })
    afterEach(() => {
        jest.restoreAllMocks();
    });

    it('dispatches success action on fetch success', async () => {
        const expected = usersMockData;
        const store = mockStore({});
        await store.dispatch(fetchUsers('user'));

        const actions = store.getActions();
        expect(actions[0]).toEqual(request());
        expect(actions[1]).toEqual(success(expected));
    });

    it('dispatches failure action on fetch failure', async () => {
        const store = mockStore({});
        (GithubService.getInstance as jest.Mock).mockImplementation(() => ({
            fetchUsers: jest.fn().mockRejectedValue(new Error('Error message'))
        }));
        await store.dispatch(fetchUsers('user')); 
        const actions = store.getActions();
        expect(actions[0]).toEqual(request());
        expect(actions[1]).toEqual(failure());
    });
});