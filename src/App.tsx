import styled from "styled-components";
import { Provider } from "jotai";

import { GlobalStyle } from "./style/GlobalStyle";
import Landing from "./Components/Landing/Landing";
import Overview from "./Components/Overview/Overview";

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
      </AppContainer>
    </Provider>
  );
}

export default App;
