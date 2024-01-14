import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { appReducer } from './reducer';

const middlewareList = [thunk];

const composeEnhancers =
    typeof window === "object" &&
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        }) : compose;

const store = createStore(
    appReducer,
    composeEnhancers(
        applyMiddleware(...middlewareList),
    ),
);

export default store;