import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '@pages/Home'

export default class Router extends Component {

    render() {
        return (
            <Switch className="router">
                <Route exact path='/' component={ Home } />
                <Route
                    exact
                    path='/Chat/:chatId'
                    render={ (obj) =>
                    <Home chatId={ Number(obj.match.params.chatId) } /> }
                />
            </Switch>
        );
    } 
}
