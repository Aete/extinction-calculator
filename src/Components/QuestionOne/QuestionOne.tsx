import styled from "styled-components";
import { ChapterTitle } from "../common/titles";
import { Description, DescriptionBold, DescriptionKR } from "../common/texts";

const QuestionOneContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 75px;
  justify-content: center;
`;

export default function QuestionOne() {
  return (
    <QuestionOneContainer>
      <ChapterTitle style={{ wordSpacing: -20 }}>
        Local Tax Revenues
      </ChapterTitle>
      <Description $isLast={false}>
        I assume that the local tax revenue of each local government is
        perfectly proportional to the number of people in the working-age
        population (ages 15 to 64). This is based on the premise that future
        economic conditions (such as the unemployment rate) and per capita GRDP
        remain the same as they are now.
      </Description>
      <Description $isLast={true}>
        Under this assumption,{" "}
        <DescriptionBold>
          I want to visualize how local government tax revenues decline in
          correlation with population changes.
        </DescriptionBold>
      </Description>
      <DescriptionKR $isLast={false}>
        각 지방자치단체의 지방세 수입이 경제활동가능인구(15세 이상 65세 미만)
        수에 완벽히 비례한다고 가정하고자 한다. 이는 미래의 경제 여건(실업률
        등)과 1인당 GRDP가 현재와 동일하며, 시민들의 생산성이 변하지 않는다는
        전제이다.{" "}
      </DescriptionKR>
      <DescriptionKR $isLast={true}>
        이를 통해{" "}
        <DescriptionBold>
          인구 감소에 따라 미래 각 지방자치단체의 지방세 수입이 얼마큼
          줄어드는지
        </DescriptionBold>
        를 계산한다.
      </DescriptionKR>
    </QuestionOneContainer>
  );
}
