import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from './utils/PrivateRoute.js'
import Login from "./components/Login/Login.js"
import Main from "./components/Main/Main.js";
import AlertTile from "./components/Tiles/AlertTile.js";

function App({context}) {

  return (
      <Router>
        <Switch>
          <Route exact path="/" render={props => <Login context={context} {...props} />} />
          <PrivateRoute path='/dashboard' context={context} component={Main} />
        </Switch>
      </Router>
  );
}

export default App;