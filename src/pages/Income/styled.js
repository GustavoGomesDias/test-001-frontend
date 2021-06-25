import styled from 'styled-components';
import * as colors from '../../config/color';

export const Section = styled.div`
  overflow-x: auto;

  display: flex;
  flex-direction: column;
  flex-flow: row wrap;

  width: 100%;

  .loss {
    background: ${colors.errorColor};
    border-radius: 4px;
  }

  .profit {
    background: ${colors.success};
    border-radius: 4px;
  }
`;
