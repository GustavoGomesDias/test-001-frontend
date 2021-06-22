import styled from 'styled-components';
import * as colors from '../../config/color';

export const SaleContainer = styled.div`
  overflow-x: auto;

  display: flex;
  flex-direction: column;
  flex-flow: row wrap;

  width: 100%;

  .button-actions {
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 5px 0;
  }

  .items {
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    background: ${colors.background};

    margin: 15px;
    padding: 10px;
    width: 30%;
    p {
      text-align: center;
      margin: 2px;
      font-size: 13px;
      font-weight: 700;
      padding: 5px;
    }

    .actions {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
    }
  }

  .edit-button {
    width: 82px;
    display: flex;
    margin-top: 5px;
    cursor: pointer;
    background: ${colors.success};
    border: none;
    color: #fff;
    padding: 10px 20px;
    border-radius: 4px;
    font-weight: 700;
    transition: all 300ms;
  }

  .edit-button:hover {
    filter: brightness(75%);
  }

  .delete-button {
    margin-top: 15px;
    background: ${colors.errorColor};
  }
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
    color: yellowgreen;
  }

  .register {
    text-align: center;
    font-weight: 700;
  }
`;
