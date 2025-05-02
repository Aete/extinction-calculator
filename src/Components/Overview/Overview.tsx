import styled from "styled-components";
import { ChapterTitle } from "../common/titles";
import { Description, DescriptionBold } from "../common/texts";

const OverviewContainer = styled.div`
  width: 100%;
  height: 100vh;
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
      <Description>
        <DescriptionBold>South Korea</DescriptionBold> is facing an accelerating
        risk of <DescriptionBold>local city extinction</DescriptionBold> due to
        persistently low birth rates, population decline, and ongoing social and
        economic concentration in the Seoul metropolitan area.
      </Description>
      <Description>
        This project uses national statistics and projected changes in future
        population structure to intuitively highlight the challenges that local
        cities will have to solve.
      </Description>
    </OverviewContainer>
  );
}
