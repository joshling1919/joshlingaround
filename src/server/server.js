import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../client/components/App';
import Html from '../client/Html';

const port = 8000;
const server = express();

server.get('/', (req, res) => {
  const body = renderToString(<App />);
  const title = 'Server side rendering with Styled Components';

  res.send(
    Html({
      body,
      title,
    }),
  );
});

server.listen(port);

console.log(`Serving at http://localhost:${port}`);
