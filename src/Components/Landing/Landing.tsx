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

const TitleOutline = styled.span`
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: #2979ff;
`;

const SubtitleFont = styled.p`
  font-family: "Noto Sans KR", sans-serif;
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
        <TitleFont>
          Local <TitleOutline>Extinction</TitleOutline> Calculator
        </TitleFont>
        <SubtitleFont>
          도시소멸 계산기: 사라지는 도시들을 위한 데이터 시각화
        </SubtitleFont>
      </TextContainer>
    </LandingContainer>
  );
}
