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

  html, body {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
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
    color: ${color.colorLink};
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

  @media (max-width: 800px) {
     html, body {
      overflow-x: hidden;
    }
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

  .items {
    transition-delay: 0.5s;

    @media (max-width: 900px) {
      display: block;
      width: 100%;

      .description {
        width: 30%;
        text-align: center;
        margin-right: 5px;
      }
    }

    width: 30%;
    margin: 15px;

    .infos {
      border-radius: 4px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
      background: ${color.background};
      width: 100%;
      margin: 5px 0;
      padding: 10px;
      p {
        text-align: left;
        margin-bottom: 6px;
        font-size: 13px;
        font-weight: 700;
        padding: 5px;
        width: 100%;
        display: flex;
        flex-flow: row wrap;
        align-items: center;

        .field {
          background: ${color.primaryColor};
          padding: 5px;
          border-radius: 4px;
        }

        .description {
          width: 40%;
          text-align: center;
          margin-right: 5px;
        }
      }

      .center {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        .available {
          background: ${color.success};
        }

        .not-available {
          background: ${color.errorColor};
        }
      }

      .actions {
        display: flex;
        width: 100%;
        padding: 5px;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        margin: 0;
        border-top: 2px solid ${color.primaryColor};
      }

      button {
        width: 100%;
      }
    }

    .header {
      padding: 5px;
      background: ${color.primaryColor};
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
      border-radius: 4px;
    }
  }

  .saleform {
    z-index: 2 !important;
    margin: 0;
    height: 200px;
    width: 50%;
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

  height: 100%;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  margin: auto;
  font-size: 12px;

  h1 {
    display: flex;
    align-items: center;
    margin-left: 32px;
  }

  .button-actions {
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .available {
    background: none;
    text-decoration: none;
    color: ${color.colorLink};
  }

  .register {
    text-align: center;
    font-weight: 700;
  }

  @media (max-width: 800px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;

    h1 {
      margin: 0;
    }

    .button-actions {
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-top: 5px;

      border-top: 2px solid ${color.primaryColor};
      border-bottom: 2px solid ${color.primaryColor};
      font-size: 10px;
    }

    .available {
      font-size: 10px;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex-flow: row wrap;
  margin-top: 10px;

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }

  .full {
    width: 100%;
  }

  input {
    height: 30px;
    width: 90%;
    font-size: 18px;
    margin-top: 5px;
    padding: 0 10px;
    border: 1px solid #fff;
    border-radius: 4px;
  }

  .column-1 {
    width: 50%;
  }

  .cofirm-acquisition {
    width: 90%;
    margin-top: 15px;
    font-size: 18px;
  }

  @media (max-width: 800px) {
    display: block;

    .column-1 {
      width: 100%;

      label {
        width: 100%;
        input {
          width: 100%;
        }
      }

      .cofirm-acquisition {
        width: 100%;
      }
    }
  }
`;
