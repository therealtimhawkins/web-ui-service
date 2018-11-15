import React from 'react';
import styled, { keyframes } from 'styled-components';
import './LoadingBar.css';

const LoadingBar = () => {
  const BounceAnimation = keyframes`
    0% { margin-bottom: 0; }
    50% { margin-bottom: 15px }
    100% { margin-bottom: 0 }
  `;

  const Dot = styled.div`
    animation: ${BounceAnimation} 1s linear infinite;
    animation-delay: ${props => props.delay};
  `;

  return (
    <div className="loadingBarContainer" >
      <div className="loadingBar">
            <div className="dotContainer">
            <Dot className="dot" delay="0s" />
            <Dot className="dot" delay=".1s" />
            <Dot className="dot" delay=".2s" />
          </ div>
      </div>
    </div>
  );
};

export default LoadingBar;