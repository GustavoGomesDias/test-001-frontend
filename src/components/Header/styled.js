import styled from 'styled-components';
import * as color from '../../config/color';

export const Nav = styled.nav`
  background: ${color.primaryColor};
  padding: 20px;
  display: flex;
  align-items: flex-start;

  a {
    color: #fff;
    margin: 0 10px 0;
    font-weight: bold;
  }
`;
