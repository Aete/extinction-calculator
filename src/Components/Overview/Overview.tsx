import styled from "styled-components";
import { ChapterTitle } from "../common/titles";
import { Description, DescriptionBold, DescriptionKR } from "../common/texts";

const OverviewContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 75px;
  justify-content: center;
`;

export default function Overview() {
  return (
    <OverviewContainer>
      <ChapterTitle>Overview</ChapterTitle>
      <Description $isLast={false}>
        <DescriptionBold>South Korea</DescriptionBold> is facing an accelerating
        risk of <DescriptionBold>local city extinction</DescriptionBold> due to
        persistently low birth rates, population decline, and ongoing social and
        economic concentration in the Seoul metropolitan area.
      </Description>
      <Description $isLast={true}>
        This project uses national statistics and projected changes in future
        population structure to intuitively highlight the challenges that local
        cities will have to solve.
      </Description>
      <DescriptionKR $isLast={false}>
        대한민국은 지속적인 저출생, 인구감소, 수도권 집중화 등으로 인해
        지방도시들의 소멸 위기가 점차 심화되고 있다.
      </DescriptionKR>
      <DescriptionKR $isLast={true}>
        이 프로젝트는 국가 통계와 미래 인구 구조 변화를 활용하여 직관적으로
        미래의 지방도시들이 겪게될 과제들을 직관적으로 제시하고자 한다.
      </DescriptionKR>
    </OverviewContainer>
  );
}
