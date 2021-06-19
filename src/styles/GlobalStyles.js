import styled, { createGlobalStyle } from 'styled-components';
import * as color from '../config/color';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    font-family: sans-serif;
  }

  button {
    cursor: pointer;
    background: yellowgreen;
    border: none;
    color: #fff;
    padding: 10px 20px;
    border-radius: 4px;
    font-weight: 700;
    transition: all 300ms
  }
  button:hover {
    filter: brightness(75%);
  }
  a {
    text-decoration: none;
    color: yellowgreen;
  }
  ul {
    list-style: none;
  }

  body {
    background: ${color.background};
  }
`;

export const Container = styled.section`
  max-width: 90%;
  background: ${color.background2};
  margin: 30px auto;
  padding: 30px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  color: #fff;
`;
