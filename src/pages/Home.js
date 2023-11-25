import React from 'react';
import styled from 'styled-components';
import "../styles/Home.css";
import { useNavigate } from 'react-router-dom';

function Home() {
  let navigate = useNavigate();
  return (
    <MainContainer>
      <MainWrapper>
        <div>
          <div className="nav">
            <div className="navItem" onClick={() => { navigate('/') }}>Home</div>
            <div className="navItem" onClick={() => { navigate('/about') }}>About</div>
            <div className="navItem" onClick={() => { navigate('/project') }}>Project</div>
            <div className="navItem" onClick={() => { navigate('/contact') }}>Contact</div>
          </div>
          <div className="insa">Hello, I'm Hyerim!</div>
          <img src="images/profile.png" className="profile" />
        </div>
      </MainWrapper>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #797979;
  // white-space: nowrap;
  // overflow-x: auto;
`;

const MainWrapper = styled.div`
  width: 1500px;
  height: 700px;
  background-color: white;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export default Home;