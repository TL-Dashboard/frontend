import React from "react";
import styled from "styled-components";

const SidebarWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 224px;
  height: 100vh;
  background-color: #1b212c;
  color: white;
  .logo {
    color: red;
    font-size: 1.8rem;
    margin-top: 25px;
  }
`;

const Sidebar = () => {
  return (
    <SidebarWrap>
      <div className="logo">Lambda</div>
    </SidebarWrap>
  );
};

export default Sidebar;
