import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import HomePage from '../../../../src/containers/HomePage';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import '@testing-library/jest-dom';
import { fetchUsers } from '../../../../src/store/users';
import { mockStoreData } from '../../../mocks/mockStore';
import { usersMockData } from '../../../mocks/usersMockData';

const mockStore = configureStore([]);
export const store = mockStore(mockStoreData);
const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: () => mockDispatch,
    useSelector: jest.fn(fn => fn())
}));

describe('HomePage', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        (redux.useSelector as jest.Mock).mockImplementation(selector => selector(store.getState()));
    });

    it('renders correctly', () => {
        render(
            <Provider store={store}>
                <HomePage />
            </Provider>
        );

        expect(screen.getByTestId('HomePage')).toBeInTheDocument();
    });

    it('matches snapshot', () => {
        const { asFragment } = render(
        <Provider store={store}>
            <HomePage />
        </Provider>
        );
        expect(asFragment()).toMatchSnapshot();
    });

    it('dispatches fetchUsers action on search button click', () => {
        render(
            <Provider store={store}>
                <HomePage />
            </Provider>
        );

        fireEvent.change(screen.getByRole('textbox'), { target: { value: 'test' } });
        fireEvent.click(screen.getByText('Search'));
        expect(mockDispatch).toHaveBeenCalled();
    });
      
    it('does not dispatch fetchUsers action when input is empty', () => {
        render(
            <Provider store={store}>
                <HomePage />
            </Provider>
        );

        fireEvent.click(screen.getByText('Search'));
        expect(mockDispatch).not.toHaveBeenCalledWith(fetchUsers(''));
    });

    it('dispatches fetchRepos action when accordion item is expanded', () => {
        const userName = usersMockData[0].login;
        const store2 = mockStore({
            ...mockStoreData,
            users: {
                ...mockStoreData.users,
                users: usersMockData
            }
        });
        (redux.useSelector as jest.Mock).mockImplementation(selector => selector(store2.getState()));

        render(
            <Provider store={store2}>
                <HomePage />
            </Provider>
        );

        fireEvent.click(screen.getByText(userName));
        console.log(JSON.stringify(mockDispatch.mock.calls));
        expect(mockDispatch).toHaveBeenCalled;
      });
});