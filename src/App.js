import React from "react";
import Sidebar from "./components/Sidebar/Sidebar.js";
import Navbar from "./components/Navbar/Navbar.js";
import Main from "./components/Main/Main.js";
import styled from "styled-components";

// * Import ContextAPI
import withContext, { Provider } from './Context';
// * Context Variables

const SidebarWithContext = withContext(Sidebar);

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
    <Provider>
      <AppWrap>
        <div className="sidebar">
          <SidebarWithContext />
        </div>
        <div className="main">
          <Navbar />
          <Main />
        </div>
      </AppWrap>
    </Provider>
  );
}

export default App;
