import styled from "styled-components";
import { Provider } from "jotai";

import Landing from "./Components/Landing/Landing";

const AppContainer = styled.div`
  max-width: 1080px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

function App() {
  return (
    <Provider>
      <AppContainer>
        <Landing />
      </AppContainer>
    </Provider>
  );
}

export default App;
