import styled, {keyframes} from 'styled-components';
import {CubeProps} from '.';

export const cubeAnimation = keyframes`
  from {
    transform: scale(0) rotate(0deg) translate(-50%, -50%);
    opacity: 1;
  }
  to {
    transform: scale(20) rotate(960deg) translate(-50%, -50%);
    opacity: 0;
  }
`;
export const BackContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
`;
export const Cube = styled.div<CubeProps>`
  position: absolute;
  top: ${(props) => props.position.top}vh;
  left: ${(props) => props.position.left}vw;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border: solid 1px #000;
  transform-origin: top left;
  transform: scale(0) rotate(0deg) translate(-50%, -50%);
  -webkit-animation: ${cubeAnimation} ${(props) => props.speed}s ease-in
    forwards infinite;
  animation: ${cubeAnimation} ${(props) => props.speed}s ease-in forwards
    infinite;
`;
