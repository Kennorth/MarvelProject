import styled from "styled-components";

export const CardWrapper = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 300px;
  width: 200px;
  border-radius: 16px;
  background-color: #d9e3f0;
  margin-top: 20px;
  box-shadow:  -4px 12px 59px -3px #555555;
`;

export const ImgWrapper = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: beige;
  margin-bottom: 32px;
  overflow: hidden;
`;
export const ImgProfile = styled.img`
  width: 100%;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroName = styled.div`
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-size: 14px;
  font-weight: 700;
  color: #333333;
`;

export const HeroDesc = styled.div`
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-size: 12px;
  font-weight: 400;
  color: #333333;
  max-height: 80px;
  overflow-y: scroll;
  margin-top: 8px;
  text-align: center;
  &::-webkit-scrollbar {
        width: 4px;
  }
  &::-webkit-scrollbar-track {
      box-shadow: "nset 0 0 6px grey";
      border-radius: "5px";
  }
  &::-webkit-scrollbar-thumb {
      background: #bbc3cd;
      border-radius: 16px;
      height: 10px;;
  }
`;