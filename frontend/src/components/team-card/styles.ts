import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  background-color: #d9e3f0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border-radius: 24px;
  padding: 16px;
  padding-bottom: 32px;
  gap: 20px;
  justify-content: center;
`;
export const TeamName = styled.text`
  text-align: center;
  font-family: system-ui;
  color: #00004f;
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 36px;
  text-transform: capitalize;
  margin-top: 16px;
`;

export const Title = styled.text`
  text-align: center;
  font-family: system-ui;
  color: #4caf50;
  display: flex;
  justify-content: center;
  font-size: 28px;
  text-transform: capitalize;
  margin-top: 16px;
`;
export const TeamWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(50% - 10px);
  min-width: 250px;
`;

export const AvaliablesWrapper = styled.div`
  width: calc(100% - 80px);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border-radius: 16px;
  min-height: 300px;
  gap: 16px;
  padding: 16px;
  border:2px solid #4caf50;
`;
export const SelectedWrapper = styled.div`
  width: calc(100% - 80px);
  background-color: #4caf50;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border-radius: 16px;
  min-height: 300px;
  gap: 16px;
  padding: 16px;
`;