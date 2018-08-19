import React from 'react';
import styled, { injectGlobal } from 'styled-components';
import styledNormalize from 'styled-normalize';

injectGlobal`
  ${styledNormalize}
`;

const AppContainer = styled.div`
  background-color: green;
  box-sizing: border-box;
`;

const App = () => (
  <AppContainer className="app">
    <h1>
Josh Ling's portfolio no
    </h1>
  </AppContainer>
);

export default App;
