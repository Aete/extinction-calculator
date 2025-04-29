import styled from "styled-components";

const LandingContainer = styled.div`
  width: 60%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 75px;
  justify-content: center;
`;

const TitleFont = styled.h1`
  font-size: 128px;
  color: #2979ff;
  margin: 0;
  padding: 0;
  text-align: left;
  line-height: 1.25;
`;

const SubtitleFont = styled.h2`
  font-size: 32px;
  color: #2979ff;
  font-weight: 300;
  font-style: italic;
  margin: 0;
  padding: 0;
  width: 100%;
  text-align: left;
  margin-top: 60px;
  margin-left: 10px;
`;

export default function Landing() {
  return (
    <LandingContainer>
      <TitleFont>Local Extinction Calculator</TitleFont>
      <SubtitleFont>
        Calculate the local extinction risk of your city
      </SubtitleFont>
    </LandingContainer>
  );
}
