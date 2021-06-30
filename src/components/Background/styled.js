import styled from 'styled-components';

import * as colors from '../../config/color';

export const Background = styled.section`
  display: flex;
  position: fixed;
  width: 100%;
  height: 100%;
  bottom: 0;
  left: 0;
  z-index: 1;
  align-items: center;
  justify-content: center;
  color: #fff;
  padding-top: 10px;

  div {
    height: 100%;
    display: flex;
    position: absolute;
    width: 100%;
    z-index: 1;
    background: rgba(0, 0, 0, 0.8);
  }

  .sale {
    margin: 50px;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50%;
    background: rgba(0, 0, 0, 0.8);

    .back {
      margin-top: 20px;
      width: 50%;

      background: ${colors.warning};
    }
  }
`;
