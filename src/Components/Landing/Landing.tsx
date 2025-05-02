import styled from "styled-components";

const LandingContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  padding: 75px;
  justify-content: center;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const TitleFont = styled.h1`
  font-family: "IBM Plex Mono", monospace;
  font-size: 96px;
  font-weight: 700;
  color: #2979ff;
  margin: 0;
  padding: 0;
  text-align: center;
  line-height: 1.25;
  width: 100%;
`;

const SubtitleFont = styled.p`
  font-family: "Roboto Mono", monospace;
  font-size: 24px;
  color: #2979ff;
  font-weight: 300;
  font-style: italic;
  margin: 0;
  padding: 0;
  width: 100%;
  text-align: center;
  margin-top: 80px;
  line-height: 1.4;
`;

export default function Landing() {
  return (
    <LandingContainer>
      <TextContainer>
        <TitleFont>Local Extinction Calculator</TitleFont>
        <SubtitleFont>
          Data Visualization of the local extinction risk of South Korean cities
        </SubtitleFont>
      </TextContainer>
    </LandingContainer>
  );
}
