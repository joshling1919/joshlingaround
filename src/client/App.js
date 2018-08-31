import React from 'react';
import styled, { injectGlobal } from 'styled-components';
import styledNormalize from 'styled-normalize';
import { hot } from 'react-hot-loader';
import Home from './components/homepage';

injectGlobal`
  ${styledNormalize}
  html, body, #root, #root>div {
    height: 100%;
  }
`;

const AppContainer = styled.div`
  background-color: green;
  box-sizing: border-box;
`;

const App = () => (
  <AppContainer className="app">
    <Home />
  </AppContainer>
);

export default hot(module)(App);
