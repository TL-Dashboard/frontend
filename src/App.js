import React from 'react';
import Sidebar from './components/Sidebar/Sidebar.js'
import Navbar from './components/Navbar/Navbar.js'

import styled from 'styled-components'

const Appwrap = styled.div`
  background-color: gray;
  height: 100%;
  width: 100%;
  display: flex;
`

function App() {
  return (
    <Appwrap>
      <Sidebar/>
      <Navbar />
      
    </Appwrap>
  );
}

export default App;
