import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

export const GameContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const WrapperForPage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  border: solid #000 2px;
  border-radius: 10px;
  z-index: 2;
  }
`;

export const Button = styled(NavLink)`
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
  font-family: fantasy;
  color: #000;
  font-size: 24px;
  @media (max-width: 980px) {
    font-size: 52px;
    margin: 45px;
  }
  justify-content: center;
  border: solid black 1px;
  border-radius: 3px;
  background-color: #fff;
  padding: 5px;
`;
