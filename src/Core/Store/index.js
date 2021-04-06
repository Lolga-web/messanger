import { createStore, compose, applyMiddleware } from 'redux';
import initReducers from './reducers';
import middleware from '@middlewares';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : () => {};
export const history = createBrowserHistory();

export default function ourStore() {
    const initStore = {};

    return createStore(
        initReducers(history),
        initStore,
        compose(
            applyMiddleware(
                routerMiddleware(history),
                ...middleware
            ),
            reduxDevTools,
        ),
    );
};
