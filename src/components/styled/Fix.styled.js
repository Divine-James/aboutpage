import styled from "styled-components";
export const StyledFixHeader = styled.h1`
  display: flex;
  justify-content: center;
  margin-top: 64px;
  font-size: 28px;
  font-weight: bold;
`;
export const StyledFixCenter = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: space-between;
  align-items: flex-start;
  padding: 0px 0px 24px;
  gap: 16px;

  width: 304px;
  height: 447px;

  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;
export const StyledFixImg = styled.img`
  width: 304px;
  height: 253px;
  border-radius: 8px;
`;
export const StyledFixBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1020px;
  margin: 0 auto;
  margin-top: 20px;
  @media (max-width: 375px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 375px;
  }
`;
export const StyledColor = styled.span`
  color: orange;
`;
export const StyledColorBlue = styled.span`
  color: blue;
`;
export const StyledColorOrange = styled.h2`
  color: orange;
  margin-left: 10px;
  font-size: 22px;
  font-weight: semi-bold;
`;
export const StyledFixp = styled.div`
  width: 250px;
  height: 100%;
  padding-left: 10px;
`;
