import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Burger from "./Burger/index";

const Navbar = (props) => {
  const [open, setOpen] = useState(false);
  const { updateState } = props.context.actions
  const user = props.context.user;
  const { first_name, last_name, type, email, cohort_name } = user;

  const sidebarLinks = [
    {
      title: "Dashboard",
      link: "/dashboard/overview",
      current: false
    },
    {
      title: "Tickets",
      link: "/dashboard/tickets",
      current: false
    },
    {
      title: "Attendance",
      link: "/dashboard/attendance",
      current: false
    },
    {
      title: "Review Form",
      link: "/dashboard/review",
      current: false
    },
    {
      title: "Retro Form",
      link: "/dashboard/retro",
      current: false
    }
  ];

  const handleLogout = () => {
    updateState('user', {})
    updateState('students', [])
    sessionStorage.clear();
  };

  return (
    <>
      <NavbarWrap>
        <div className="menu">
          <Burger open={open} setOpen={setOpen} />
        </div>
        <div className="title">
          {/* {first_name ? first_name : "Error, please login again."} */}
        </div>
      </NavbarWrap>
      <DropDown className={`${open ? "active" : ""}`}>
        <SidebarUserInfo>
          <div className="user--image"></div>
          <div className="user--info">
            <div className="name">{`${first_name} ${last_name}`}</div>
            <div className="title">{`${type} ${cohort_name}`}</div>
            <div className="email">{`${email}`}</div>
          </div>
        </SidebarUserInfo>
        <StyledNav className="links">
          <ul>
            {sidebarLinks.map((item, index) => (
              <Link key={index} to={item.link}>
                <li
                  className={`links__link ${item.current ? "current" : ""}`}
                  onClick={() => setOpen(!open)}
                >
                  {item.title}
                </li>
              </Link>
            ))}
            <Link to="/" onClick={handleLogout}>
              <li className={`links__link`}>Logout</li>
            </Link>
            <Link to="/dashboard/about">
              <li className={`links__link`} id="about">
                About
              </li>
            </Link>
          </ul>
        </StyledNav>
      </DropDown>
    </>
  );
};

const DropDown = styled.div`
  position: absolute;
  top: 80px;
  left: 0;

  background: #253040;
  height: 0;
  width: 100vw;
  z-index: 2;
  overflow: hidden;

  transition: height 0.4s ease-in-out;

  &.active {
    height: calc(100vh - 80px);
  }
`;

const NavbarWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 50px;
  min-height: 50px;
  background-color: #1b212c;
  color: white;
  @media screen and (min-width: 636px) {
    display: none;
  }
  .menu {
    margin: 0 10px;
    order: 1;
  }
  .title {
    display: flex;
    justify-content: center;
  }
`;

const SidebarUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 50px;

  div.user--image {
    width: 100px;
    height: 100px;
    margin-bottom: 15px;
    border-radius: 15%;

    background: url("https://api.adorable.io/avatars/130/play@adorable.io.png")
      center center no-repeat;
    background-size: cover;
  }
  div.user--info {
    text-align: center;
  }
`;

const StyledNav = styled.nav`
  width: 100%;
  margin-top: 20px;
  ul {
    list-style: none;
    padding-left: 0;

    li {
      padding: 10px 0;
      text-align: center;

      &.current {
        background: black;
      }

      &:hover {
        background: #12161e;
      }
    }

    a {
      color: white;
      text-decoration: none;
    }
  }
`;

export default Navbar;
