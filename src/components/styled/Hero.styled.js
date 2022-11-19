import styled from "styled-components";
export const StyledHero = styled.div`
  @import url
  (
    "https://fonts.googleapis.com/css?family=Lato:400,700" rel= "stylesheet"
      type= "text/css"
  );
  display: flex;
  justify-content: space-between;
  @media (max-width: 375px) {
    flex-direction: column-reverse;
  }
`;
export const DeskImg = styled.img`
  @media (max-width: 375px) {
    display: none;
  }
`;
export const MobImg = styled.img`
  display: none;
  @media (max-width: 375px) {
    display: Block;
  }
`;
export const StyledHeroMsg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 70px;
  width: 650px;
  @media (max-width: 375px) {
    padding: 0 20px;
    align-items: center;
    justify-content: center;
    width: 370px;
  }
`;
//export const StyledHeroHead = styled.h1``
export const StyledHerotxt = styled.p`
  width: 550px;
  font-size: 16px;
  font-family: "lato", sans-serif;
  font weight: 700;
  @media (max-width: 375px){
    width: 375px;
  }
`;
export const StyledHerotxtSpan = styled.p`
  width: 500px;
  margin: 10px 0;
  font-size: 16px;
  font weight: 700;
  font-family: "lato", sans-serif;
  @media (max-width: 375px){
    width: 375px;
  }
`;
export const StyledOrange = styled.span`
  color: #f16f04;
`;
export const StyledBlue = styled.h1`
  color: #233ba9;
  font-size: 57px;
  font-family: "lato", sans-serif;
  @media (max-width: 375px) {
    font-size: 32px;
  }
`;
