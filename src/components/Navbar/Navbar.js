import React from "react";
import styled from "styled-components";

const NavbarWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  background-color: #1b212c;
  color: white;
  .menu {
    margin: 0 10px;
    @media screen and (min-width: 636px) {
      display: none;
    }
  }
`;

const Navbar = () => {
  return (
    <NavbarWrap>
      <div className="menu">Menu</div>
      <div>Nav</div>
    </NavbarWrap>
  );
};

export default Navbar;
