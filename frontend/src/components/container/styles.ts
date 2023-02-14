import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1300px;
  min-height: 100%;
  background-color: #b80000;
  margin: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 32px;
  gap: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Title = styled.h1`
  text-align: center;
  font-family: system-ui;
  color: #DBBB4B;
  width: 100%;
`;

export const UtilityButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  padding: 20px;
`;