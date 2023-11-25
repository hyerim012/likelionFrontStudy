import React from 'react';
import styled from 'styled-components';
import "../styles/About.css";
import { useNavigate } from 'react-router-dom';

function About() {
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
          <div className="aboutTitle">About</div>
          <ContentContainer>
            <img src="images/profile.png" />
            <div className="info">
              <div className="infoItem">
                <div className="at">NAME</div>
                <div>박혜림</div>
              </div>
              <div className="infoItem">
                <div className="at">BIRTH</div>
                <div>02.11.12</div>
              </div>
              <div className="infoItem">
                <div className="at">MBTI</div>
                <div>ISTJ</div>
              </div>
              <div className="infoItem">
                <div className="at">SCHOOL / MAJOR</div>
                <div>HUFS / GBT</div>
              </div>
            </div>
          </ContentContainer>
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

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 300px;
  
  img {
    width: 200px;
    height: 200px;
    margin-right: 30px;
  }
  
  .info {
    display: flex;
    flex-direction: column;
    margin-top: 60px;
    justify-content: flex-start;
  }

  .infoItem {
    margin-bottom: 30px;
    display: flex;
  }
`;

export default About;