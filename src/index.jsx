import React from 'react';
import ReactDom from 'react-dom';

import { StylesProvider } from '@material-ui/core/styles';
import { Provider } from "react-redux";

import Router from './Core/router';
import ourStore, { history } from './Core/Store';

import { ConnectedRouter } from 'connected-react-router';


const container = document.querySelector('#app');

ReactDom.render(
    <Provider store={ ourStore() }>
        <ConnectedRouter history={ history }>
            <StylesProvider>
                <Router />
            </StylesProvider>
        </ConnectedRouter>
    </Provider>,
    container
);
