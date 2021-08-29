/**
 * copy from 'https://codepen.io/jkantner/pen/VwbLajq?editors=1100'
 */

import React from 'react';
import styled, { keyframes } from 'styled-components';

const bounce = keyframes`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    transform: scaleY(1);
    animation-timing-function: ease-out;
  }
  10% {
    transform: scaleY(6);
    animation-timing-function: ease-in;
  }
  30% {
    transform: scaleY(4);
    animation-timing-function: ease-in;
  }
  50% {
    transform: scaleY(2);
    animation-timing-function: ease-in;
  }
  70% {
    transform: scaleY(1.5);
    animation-timing-function: ease-in;
  }
`;

const LoadingWrapper = styled.div`
  color: gray;
  display: flex;
  flex-wrap: wrap;
  font: 1em/1.5 sans-serif;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  margin: 1.5em;
  width: 6em;
  height: 6em;
  align-items: flex-end;
  justify-content: center;
  gap: 1em;
`;

const Single = styled.div<{ delay: string }>`
  width: 0.75em;
  height: 0.75em;
  animation: ${bounce} 2s linear infinite;
  transform-origin: 50% 100%;
  background: gray;
  animation-delay: ${(props) => props.delay};
`;

function Loading() {
  return (
    <LoadingWrapper>
      <Wrapper>
        <Single delay="0" />
        <Single delay="0.1s" />
        <Single delay="0.2s" />
        <Single delay="0.3s" />
      </Wrapper>
    </LoadingWrapper>
  );
}

export default Loading;
