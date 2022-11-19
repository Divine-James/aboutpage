import styled from "styled-components";
export const StyledStory = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px 50px;
  background-color: #eef1fc;
  width: 644px;
  @media (max-width: 375px) {
    display: flex;
    flex-direction: column;
    width: 375px;
    align-items: center;
    justify-content: center;
  }
`;
export const StoryHead = styled.h1`
  font-size: 28px;
  font-weight: bold;
`;
export const StoryP = styled.p`
font-size: 16px;
font-weight: bold:
`;
export const StyledStorytxt = styled.div`
  margin-right: 20px;
  width: 556px;
  @media (max-width: 375px) {
    width: 375px;
  }
`;
export const StoryImg = styled.img`
  @media (max-width: 375px) {
    display: none;
    visibility: none;
  }
`;
