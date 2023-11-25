import React from 'react';
import styled from 'styled-components';
import "../styles/Contact.css";
import { useNavigate } from 'react-router-dom';

function Contact() {
  let navigate = useNavigate();

  const handleEmailClick = () => {
    window.location.href = 'mailto:phrver@hufs.ac.kr';
  };

  const handleGitHubClick = () => {
    window.location.href = 'https://github.com/hyerim012';
  };

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
          <div className="contactTitle">Contact</div>
          <div className="imgs">
            <img src="images/icon-gmail.png" className="gmailImg" onClick={handleEmailClick} />
            <img src="images/icon-github.png" className="gitImg" onClick={handleGitHubClick} />
          </div>
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
export default Contact;