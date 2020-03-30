import React from "react";
import Sidebar from "./components/Sidebar/Sidebar.js";
import Navbar from "./components/Navbar/Navbar.js";
import Main from "./components/Main/Main.js";
import styled from "styled-components";

const AppWrap = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  .sidebar {
    @media screen and (max-width: 636px) {
      display: none;
    }
  }
  .main {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
  }
`;

function App() {
  return (
    <AppWrap>
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="main">
        <Navbar />
        <Main />
      </div>
    </AppWrap>
  );
}

export default App;
