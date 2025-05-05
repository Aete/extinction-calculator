import styled from "styled-components";
import { Provider } from "jotai";

import { GlobalStyle } from "./style/GlobalStyle";
import Landing from "./Components/Landing/Landing";
import Overview from "./Components/Overview/Overview";
import QuestionOne from "./Components/QuestionOne/QuestionOne";

const AppContainer = styled.div`
  width: 1280px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <Provider>
      <GlobalStyle />
      <AppContainer>
        <Landing />
        <Overview />
        <QuestionOne />
      </AppContainer>
    </Provider>
  );
}

export default App;
