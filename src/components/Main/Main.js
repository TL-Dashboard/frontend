import React, {useEffect} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import styled from 'styled-components';

import { getStudentData } from '../../utils';
import Sidebar from "../Sidebar/Sidebar.js";
import Navbar from "../Navbar/Navbar.js";
import TileContainer from '../Tiles/TileContainer';

const MainContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  .sidebar {
    @media screen and (max-width: 636px) {
      display: none;
    }
  }
`

const Main = (props) => {
  console.log('rendering main', props.context)
  const context = props.context

  return (
    <MainContainer>
      <div className='sidebar'>
        <Sidebar/>
      </div>
    <div className='main'>
        <Navbar />
        <Router>
          <Switch>
            <Route exact path='/dashboard/overview' component={TileContainer} />
            <Route render={props => <h1>Page was not found.</h1>} />
          </Switch>
        </Router>
    </div>
    </MainContainer>
  );
};

export default Main;
      {/* <Router>
          <Switch>
            <Route exact path='/dashboard/overview' component={TileContainer} />
            <PrivateRoute path='/dashboard' context={context} component={TileContainer} />
            <Route render={props => <h1>Page was not found.</h1>} />
          </Switch>
      </Router> */}

{/* <div className="main">
<Navbar />
<Main {...props} />
</div> */}