import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";

import { getStudentData, getUser, getTickets, getAssignments, getCohorts } from "../../utils";
import Sidebar from "../Sidebar/Sidebar.js";
import Navbar from "../Navbar/Navbar.js";
import TileContainer from "../Tiles/TileContainer";

import { Switch } from 'react-router-dom';

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

const Main = (props) => {
  // console.log('main props', props.context)

  const { context } = props;
  const { updateState } = context.actions

  useEffect(() => {
    if (!props.context.students.length) {
      const user = getUser(updateState)
      getStudentData(updateState, user.id)
      getTickets(updateState, user.id)
      getAssignments(updateState, user.cohort_id)
      getCohorts(updateState, user.cohort_id)
    }
  }, [props.context.students.length, updateState]);

  return (
    <MainContainer>
      <div className="sidebar">
        <Sidebar {...props} />
      </div>
      <div className="main">
        <Navbar {...props} />
        <Switch>
          <Route path="/dashboard/overview" render={props => <TileContainer context={context} {...props} />} />
          <Route render={props => <h1>Page was not found.</h1>} />
        </Switch>
      </div>
    </MainContainer>
  );
};

export default Main;
