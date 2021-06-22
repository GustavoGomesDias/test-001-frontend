import styled, { createGlobalStyle } from 'styled-components';
import * as color from '../config/color';
import 'react-toastify/dist/ReactToastify.css';

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
    background: ${color.success};
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
    transition: all 300ms
  }

  a:hover {
    filter: brightness(75%);
  }

  ul {
    list-style: none;
  }

  body {
    height: 100%;
    background: ${color.background};
  }

  body .Toastify .Toastify__toast-container .Toastify__toast--success {
    background: ${color.success};
  }
  body .Toastify .Toastify__toast-container .Toastify__toast--error {
    background: ${color.errorColor};
  }

  .home {
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
