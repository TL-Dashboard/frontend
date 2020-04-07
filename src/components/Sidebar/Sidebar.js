import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/LambdaLogo.svg";

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

  .user--info {
    margin-top: 15px;
    text-align: center;
    .name {
      font-weight: bold;
    }
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

    border-radius: 15%;

    background: url("https://api.adorable.io/avatars/130/play@adorable.io.png")
      center center no-repeat;
    background-size: cover;
  }
`;

const StyledLogo = styled(Logo)`
  width: 60%;
  margin-top: 40px;
  svg path {
    fill: #eb3944;
  }
`;

const StyledNav = styled.nav`
  width: 100%;
  height: 100%;
  /* border: 1px solid red; */
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
  #about {
    margin-top: 100px;
  }
`;

const StyledBottomNav = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
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

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  span {
    position: relative;
    left: 20px;
    top: -10px;
    color: #eb3944;
    font-family: "Times New Roman";
  }
`;

const Sidebar = props => {
  // console.log('sidebar', props.context)
  // const cohorts = props.context.cohorts;
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
    <SidebarWrap>
      <LogoWrapper>
        <StyledLogo />
        <span>Team Leads</span>
      </LogoWrapper>
      <SidebarUserInfo>
        <div className="user--image"></div>
        <div className="user--info">
          <div className="name">{`${first_name} ${last_name}`}</div>
          <div className="title">{`${type} ${cohort_name || `Web29`}`}</div>
          <div className="email">{`${email}`}</div>
        </div>
      </SidebarUserInfo>
      <StyledNav className="links">
        <ul>
          {sidebarLinks.map((item, index) => (
            <Link key={index} to={item.link}>
              <li className={`links__link ${item.current ? "current" : ""}`}>
                {item.title}
              </li>
            </Link>
          ))}
          <Link to="/" onClick={handleLogout}>
            <li className={`links__link`}>Logout</li>
          </Link>
        </ul>
      </StyledNav>
      <StyledBottomNav>
        <ul>
          <Link to="/dashboard/about">
            <li className={`links__link`} id="about">
              About
            </li>
          </Link>
        </ul>
      </StyledBottomNav>
    </SidebarWrap>
  );
};

export default Sidebar;
