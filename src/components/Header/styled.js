import styled from 'styled-components';
import * as color from '../../config/color';

export const Nav = styled.nav`
  background: ${color.background};
  position: sticky;
  width: 100%;
  top: 0;
  padding: 20px;
  z-index: 98;

  border-bottom: 2px solid ${color.primaryColor};

  @media (max-width: 800px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  a {
    color: #fff;
    margin: 0 10px 0;
    font-weight: bold;
  }
`;
