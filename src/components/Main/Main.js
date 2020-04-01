import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import withContext, { Provider } from '../../Context';

import TileContainer from '../Tiles/TileContainer';
import Login from '../Login/Login.js';

const Main = () => {
  return (
    <div className='main'>
      <Router>
          <Switch>
            <Route exact path="/" render={props => <Login {...props} />} />
            <Route path="/dashboard" render={props => <TileContainer {...props} />} />
            <Route render={props => <h1>Page was not found.</h1>} />
          </Switch>
      </Router>
    </div>
  );
};

export default Main;
