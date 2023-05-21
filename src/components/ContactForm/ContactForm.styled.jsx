import styled from '@emotion/styled';

export const Form = styled.form`
  border-color: white;
  display: flex;
  padding: 20px;
  justify-content: center;
  background-color: #8b54c1;
`;
export const Label = styled.label`
  color: white;
  font-size: 30px;
  text-align: center;
`;
export const InputForm = styled.input`
  font-size: 30px;
  text-align: center;
  margin: 20px;
`;
export const BtnForm = styled.button`
  width: 150px;
  background-color: #8b54c1;
  font-size: 25px;
  color: white;
  border: none;
  border-radius: 5%;
  cursor: pointer;

  &&:hover{
    border: 1px solid white;
  }
`;
