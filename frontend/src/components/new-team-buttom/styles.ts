import styled from "styled-components";

export const Button = styled.button`
  width: calc(50% - 10px);
  min-width: 250px;
  height: 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background-color: #4caf50;
  border: none;
`;
export const TitleButton = styled.div`
  font-family: system-ui;
  font-size: 24px;
  font-weight: 400;
  color: #abb8c3;
  max-width: 60%;
`;
export const Input = styled.input`
  font-family: system-ui;
  font-size: 18px;
  color:  #4caf50;
  padding: 8px;
  height: 32px;
  border-radius: 12px;
  border: none;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;

`;
export const ButtonSubmit = styled.input`
  font-family: system-ui;
  font-size: 18px;
  color:  #4caf50;
  width: 80px;
  height: 48px;
  border-radius: 12px;
  border: none;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
`;
