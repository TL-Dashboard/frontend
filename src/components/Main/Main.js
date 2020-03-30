import React from "react";
import styled from "styled-components";

const MainWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  width: 100%;
  height: 100%;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    166deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );
  color: white;
  overflow-y: auto;
  .tile-container {
    margin: 50px auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    .tile {
      margin: 15px 5px;
      width: 350px;
      height: 300px;
      /* border: 1px solid lightgray; */
      border-radius: 3px;
      box-shadow: 2px 2px 10px lightgray;
      background-color: white;
      color: black;
    }
  }
`;

const Main = () => {
  return (
    <MainWrap>
      <div className="tile-container">
        <div className="tile">Alerts</div>
        <div className="tile">
          List of students who have not submitted most recent retro
        </div>
        <div className="tile">Attendance</div>
        <div className="tile">Tile</div>
        <div className="tile">Tile</div>
        <div className="tile">Tile</div>
      </div>
    </MainWrap>
  );
};

export default Main;
