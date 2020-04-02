import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from './utils/PrivateRoute.js'
import Login from "./components/Login/Login.js"
import Main from "./components/Main/Main.js";

function App(props) {
  return (
      <Router>
          <Route exact path="/" render={props => <Login context={props.context} {...props} />} />
          <PrivateRoute path='/dashboard' context={props.context} component={Main} />
      </Router>
  );
}

export default App;