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

  .delete-button {
    margin-top: 15px;
    background: ${colors.errorColor};
  }
`;
