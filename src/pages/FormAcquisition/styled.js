import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex-flow: row wrap;
  margin-top: 10px;

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }

  input {
    height: 30px;
    width: 90%;
    font-size: 18px;
    margin-top: 5px;
    padding: 0 10px;
    border: 1px solid #fff;
    border-radius: 4px;
  }
  .column-1 {
    width: 50%;
  }

  .cofirm-acquisition {
    width: 90%;
    margin-top: 15px;
    font-size: 18px;
  }
`;
