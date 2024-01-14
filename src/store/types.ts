import { Dispatch } from 'redux';
import { appReducer } from './reducer';

export type Thunk = (
    dispatch: Dispatch<any>,
    getState: () => RootState
) => Promise<any>;

export type RootState = ReturnType<typeof appReducer>;