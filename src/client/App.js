import React from 'react';
import { injectGlobal } from 'styled-components';
import styledNormalize from 'styled-normalize';
import { hot } from 'react-hot-loader';
import Home from './components/homepage';

// eslint-disable-next-line
injectGlobal`
  ${styledNormalize}
  html, body, #root, #root>div {
    height: 100%;
    box-sizing: border-box;
    font-family: Nunito, sans-serif;
    font-weight: 300;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

const App = () => (
  <div className="app">
    <Home />
  </div>
);

export default hot(module)(App);
