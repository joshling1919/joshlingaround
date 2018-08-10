import React from 'react';
import styled from 'styled-components';
import { hot } from 'react-hot-loader';

const AppContainer = styled.div`
  background-color: green;
  box-sizing: border-box;
`;

const App = () => (
  <AppContainer className="app">
    <h1>
Josh Ling's portfolio
    </h1>
  </AppContainer>
);

export default App;
