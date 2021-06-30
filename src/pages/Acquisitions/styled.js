import styled from 'styled-components';
import * as colors from '../../config/color';

export const AcContainer = styled.div`
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
    font-size: 10px;
  }

  .sale-button {
    background: ${colors.success};
  }

  .edit-button {
    margin-top: 15px;
    background: ${colors.warning};
  }

  .link {
    display: flex;
    color: #fff;
    width: 100%;
  }

  .delete-button {
    margin-top: 15px;
    background: ${colors.errorColor};
  }
`;
