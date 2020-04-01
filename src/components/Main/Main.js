import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import withContext, { Provider } from '../../Context';
import styled from "styled-components";

import Attendance from "../Tiles/Attendance.js";
import AlertTile from '../Tiles/AlertTile';
import MissingWork from "../Tiles/MissingWork";

const Main = () => {
  return (
    <div className='main'>
      <Router>
        <Switch>
          <Route exact path="/" render={props => <div {...props}>Login Page</div>} />
          <Route path="/dashboard" render={props => <Tile {...props} />} />
          <Route render={props => <h1>Page was not found.</h1>} />
        </Switch>
      </Router>
    </div>
  );
};

// const Main = () => {
//   return (
//     <div className='main'>
//       <div className="main-container">
//         <Tile className='tile' title='Alerts'>
//           <AlertTileWithContext />
//         </Tile>
//         <Tile className="tile" title='Missing Work'>
//           <MissingWork />
//         </Tile>
//         <Tile className="tile" title='Attendance'>
//           <Attendance />
//         </Tile>
//         <div className="tile">Tile</div>
//         <div className="tile">Tile</div>
//         <div className="tile">Tile</div>
//       </div>
//     </div>
//   );
// };

const Tile = ({ children, title }) => {
  return (
    <div className='tile'>
      {title ? (
        <div className='tile__header'>
          { title }
        </div>
      ) : (null)}
      <div className='tile__body'>
        {children}
      </div>
    </div>
  )
}

export default Main;
