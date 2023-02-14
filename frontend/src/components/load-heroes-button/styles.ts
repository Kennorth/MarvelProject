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
export const ImgWrapper = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: beige;
  margin-bottom: 32px;
  overflow: hidden;
`;
export const HeroName = styled.div`
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-size: 14px;
  font-weight: 700;
  color: #333333;
`;