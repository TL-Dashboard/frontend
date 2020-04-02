import React, {useEffect} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import PrivateRoute from '../../utils/PrivateRoute.js';

import withContext from '../../Context';

import TileContainer from '../Tiles/TileContainer';
import Login from '../Login/Login.js';

const LoginWithContext = withContext(Login)
const PrivateRouteWithContext = withContext(PrivateRoute)


const Main = (props) => {
  console.log('rendering main')



  return (
    <div className='main'>
      <Router>
          <Switch>
            <Route exact path="/" render={props => <LoginWithContext {...props} />} />
            <PrivateRouteWithContext path='/dashboard' component={TileContainer} />
            <Route render={props => <h1>Page was not found.</h1>} />
          </Switch>
      </Router>
    </div>
  );
};

export default Main;
