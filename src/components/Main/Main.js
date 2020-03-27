import React from "react";
import styled from "styled-components";

const MainWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    166deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );
  color: white;
`;

const Main = () => {
  return (
    <MainWrap>
      <div className="logo">Main</div>
    </MainWrap>
  );
};

export default Main;
