import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import withContext, { Provider } from '../../Context';
import styled from "styled-components";

import TileContainer from './Tiles/TileContainer';

const Main = () => {
  return (
    <MainWrap>
      <Router>
        <Switch>
          <Route exact path="/" render={props => <div {...props}>Login Page</div>} />
          <Route path="/dashboard" render={props => <TileContainer {...props} />} />
          <Route render={props => <h1>Page was not found.</h1>} />
        </Switch>
      </Router>
    </MainWrap>
  );
};

const MainWrap = styled.div`
  width: 100%;
  height: 100%;
  color: white;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  
  background: rgb(255, 255, 255);
  background: linear-gradient(
    166deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );
  overflow-y: auto;
  
  .tile-container {
    margin-top: 20px;
    max-width: 1368px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  
    .tile {
      width: 350px;
      height: 400px;

      background-color: white;

      margin-bottom: 20px;
      
      border-radius: 3px;
      box-shadow: 2px 2px 10px lightgray;
      
      &__header {
        width: 100%;
        height: 40px;
        color: white;
        font-weight: bold;
        
        background-color: #1B212D;

        display: flex;
        align-items: center;

        padding-left: 15px;
      }
    }
  }
`;

export default Main;
