import styled from "styled-components";

type DescriptionProps = {
  $isLast?: boolean;
};

export const Description = styled.p<DescriptionProps>`
  font-family: "Roboto Mono", monospace;
  font-size: 20px;
  color: #263238;
  font-weight: 300;
  width: 100%;
  line-height: 1.8;
  margin-bottom: ${(props) => (props.$isLast ? "40px" : "10px")};
  margin-left: 4px;
  word-spacing: -2px;
`;

export const DescriptionBold = styled.span`
  font-weight: 500;
  color: #2979ff;
`;

export const DescriptionKR = styled.p<DescriptionProps>`
  font-size: 20px;
  color: #263238;
  font-weight: 300;
  width: 100%;
  line-height: 1.8;
  margin-bottom: 20px;
  font-family: "Noto Sans KR", sans-serif;
  margin-bottom: ${(props) => (props.$isLast ? "40px" : "10px")};
  margin-left: 4px;
  word-spacing: 4px;
`;
