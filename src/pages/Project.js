import React from 'react';
import styled from 'styled-components';
import "../styles/Project.css";
import { useNavigate } from 'react-router-dom';

function Project() {
  let navigate = useNavigate();
  return (
    <MainContainer>
      <MainWrapper>
        <div>
          <div className="nav-project">
            <div className="navItem-project" onClick={() => { navigate('/') }}>Home</div>
            <div className="navItem-project" onClick={() => { navigate('/about') }}>About</div>
            <div className="navItem-project" onClick={() => { navigate('/project') }}>Project</div>
            <div className="navItem-project" onClick={() => { navigate('/contact') }}>Contact</div>
          </div>
          <div className="projectTitle">Project</div>
          <div className="section-project">
            <article className="box-project">
                <img className="img-project" src="images/screentest.png" />
                <div className="txt-project">
                  <h3>물어봐</h3>
                  <dl>
                    <dt>기간</dt>
                    <dd>2023.08.05 ~ 2023.08.19</dd>
                    <dt>설명</dt>
                    <dd>디지털 약자들을 위한 도움 웹</dd>
                    <dt>사용기술</dt>
                    <dd>Next, CSS</dd>
                  </dl>
                </div>
            </article>
            <article className="box-project">
            <img className="img-project" src="images/ganzithon1.png" />
                <div className="txt-project">
                  <h3>삼시세끼</h3>
                  <dl>
                    <dt>기간</dt>
                    <dd>2023.10.28 ~ 2023.11.12</dd>
                    <dt>설명</dt>
                    <dd>소외 지역 여행 홍보 웹</dd>
                    <dt>사용기술</dt>
                    <dd>React, CSS</dd>
                  </dl>
                </div>
            </article>
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
`;

const MainWrapper = styled.div`
  width: 1500px;
  height: 700px;
  background-color: white;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  overflow-y: auto;
  overflow-x: hidden;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export default Project;