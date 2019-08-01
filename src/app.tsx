import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';

import Message from './components/message';
import Test from './components/test';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Message}  />
                <Route exact path="/test" component={Test}  />
            </Switch>
        </Router>
    );
}

export default hot(App);
