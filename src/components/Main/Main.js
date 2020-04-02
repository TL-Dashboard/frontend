import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";

import { getStudentData, getUser } from "../../utils";
import Sidebar from "../Sidebar/Sidebar.js";
import Navbar from "../Navbar/Navbar.js";
import TileContainer from "../Tiles/TileContainer";

const MainContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  .sidebar {
    @media screen and (max-width: 636px) {
      display: none;
    }
  }
`;

const Main = props => {

  const { updateState } = props.context.actions

  useEffect(() => {
    if (!props.context.data.length) {
      const id = getUser()
      getStudentData(updateState, id)
    }
  }, [props.context.data.length, updateState]);

  return (
    <MainContainer>
      <div className="sidebar">
        <Sidebar {...props} />
      </div>
      <div className="main">
          <Navbar {...props} />
          <Route path="/dashboard/overview" component={TileContainer} />
          <Route render={props => <h1>Page was not found.</h1>} />
      </div>
    </MainContainer>
  );
};

export default Main;
