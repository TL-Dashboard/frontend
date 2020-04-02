import React from "react";
import styled from "styled-components";

const NavbarWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  min-height: 50px;
  background-color: #1b212c;
  color: white;
  .menu {
    margin: 0 10px;
    @media screen and (min-width: 636px) {
      display: none;
    }
  }
  .title{
    display: flex;
    justify-content: center;
  }
`;

const Navbar = () => {
  return (
    <NavbarWrap>
      <div className="menu">Menu</div>
      <div className='title'>User Name</div>
    </NavbarWrap>
  );
};

export default Navbar;
