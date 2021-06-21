import styled from 'styled-components';
import * as colors from '../../config/color';

export const AcContainer = styled.div`
  overflow-x: auto;

  width: 100%;
  div {
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 5px 0;
  }

  table {
    border-collapse: collapse;
    width: 50% !important;
    margin: auto;
  }

  tr:hover {
    background: ${colors.secundaryColor};
  }

  table,
  th,
  td {
    margin-top: 10px;
    border: 2px solid ${colors.primaryColor};
    padding: 10px;
    text-align: center;
  }

  th {
    background: ${colors.secundaryColor};
  }

  .edit-button {
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
