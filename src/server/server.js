import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import App from '../common/App';
import Html from '../client/Html';

const app = express();

app.get('/', (req, res) => {
  const sheet = new ServerStyleSheet();
  const body = renderToString(sheet.collectStyles(<App />));
  const styles = sheet.getStyleTags();
  const title = 'rendering with Styled Components';

  res.send(
    Html({
      body,
      styles,
      title,
    }),
  );
});

export default app;
