import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/LambdaLogo.svg';

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

    background: url('https://api.adorable.io/avatars/130/play@adorable.io.png') center center no-repeat;
    background-size: cover;
  }
`;

const StyledLogo = styled(Logo)`
  width: 60%;
  margin-top: 40px;
  svg path {
    fill : #EB3944;
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

      &.current{
        background: black;
      }

      &:hover {
        background: #12161E;
      }
    }

    a {
      color: white;
      text-decoration: none;
    }
  }
`;

const LogoWrapper = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;

  span {
    position:relative;
    left: 20px;
    top: -10px;
    color: #EB3944;
    font-family: "Times New Roman";
  }
`;

const Sidebar = (props) => {

  // console.log('sidebar', props.context)
  const cohorts = props.context.cohorts;
  const user = props.context.user;
  const { first_name, last_name, type, email } = user;


  const sidebarLinks = [
    {
      title: "Dashboard",
      link: "/dashboard/overview",
      current: false
    },
    {
      title: "Alerts",
      link: "/dashboard/alerts",
      current: false
    },
    {
      title: "Attendance",
      link: "/dashboard/attendance",
      current: false
    },
    {
      title: "Unsubmitted Retros",
      link: "/dashboard/unsubmittedretros",
      current: false
    },
    {
      title: "Grade Tracker",
      link: "/dashboard/gradetracker",
      current: false
    },
    {
      title: "About",
      link: "/dashboard/about",
      current: false
    }
  ]

  return (  
    <SidebarWrap>
      <LogoWrapper>
        <StyledLogo />
        <span>Team Leads</span>
      </LogoWrapper>
      <SidebarUserInfo>
        <div className='user--image'></div>
        <div className='user--info'>
          <div className='name'>{`${first_name} ${last_name}`}</div>
          <div className='title'>{`${type} ${cohorts.name}`}</div>
          <div className='email'>{`${email}`}</div>
        </div>
      </SidebarUserInfo>
      <StyledNav className='links'>
        <ul>
          {
            sidebarLinks.map((item, index) => (
              <Link key={index} to={item.link}>
                <li className={`links__link ${item.current ? 'current' : ''}`}>{item.title}</li>
              </Link>
            ))
          }
        </ul>
      </StyledNav>
    </SidebarWrap>
  );
};

export default Sidebar;
