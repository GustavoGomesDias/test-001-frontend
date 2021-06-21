import styled from 'styled-components';

import * as colors from '../../config/color';

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  flex-flow: row wrap;
  margin-top: 10px;

  h2 {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    display: flex;
  }

  p {
    text-align: justify;
    max-width: 80%;
  }

  ul {
    list-style-type: disc;
    list-style-position: inside;
    padding-left: 10px;
  }

  .description {
    margin-top: 10px;
  }

  .repositories {
    display: flex;
    flex-direction: column;
    flex-flow: row wrap;
  }

  .repository {
    border: 2px solid ${colors.primaryColor};
    padding: 20px;
  }

  .column-1 {
    margin-top: 20px;
    width: 50%;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-bottom: 2px solid ${colors.primaryColor};
`;

export const Table = styled.table`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;
