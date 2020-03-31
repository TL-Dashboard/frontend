import React from "react";
import Attendance from "../Attendance/Attendance.js";
import styled from "styled-components";

import withContext, { Provider } from '../../Context';

import AlertTile from './Tiles/AlertTile';

const AlertTileWithContext = withContext(AlertTile);

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
    margin-top: 40px;
    height: 100%;
    width: 100%;
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

const Main = () => {
  return (
    <MainWrap>
      <div className="tile-container">
        <Tile title='Alerts'>
          <AlertTileWithContext />
        </Tile>
        <Tile className="tile">
          List of students who have not submitted most recent retro
        </Tile>
        <div className="tile"><Attendance /></div>
        <div className="tile">Tile</div>
        <div className="tile">Tile</div>
        <div className="tile">Tile</div>
      </div>
    </MainWrap>
  );
};

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
