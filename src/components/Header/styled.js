import styled from 'styled-components';
import * as color from '../../config/color';

export const Nav = styled.div`
  top: 0;
  position: sticky;
  z-index: 98;
  width: 100%;
  background: ${color.background};
  height: 50px;

  .link {
    color: #fff;
  }
  nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 2px solid ${color.secundaryColor};
    height: 100%;
  }

  .nav-list {
    display: flex;

    li {
      letter-spacing: 3px;
      margin: 20px;
    }
  }

  .mobile {
    display: none;
  }

  @media (max-width: 800px) {
    .mobile {
      z-index: 99;
      display: block;
      cursor: pointer;

      div {
        width: 32px;
        height: 2px;
        background: #fff;
        margin: 8px;
      }
    }

    .nav-list {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 92vh;
      background: ${color.background};
      border-bottom: 2px solid ${color.secundaryColor};
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      transform: translateX(100%);
      transition: transform 0.3s ease-in;
    }

    .active {
      transform: translateX(0);
    }
  }
`;
