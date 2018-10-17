import express from 'express';
import React from 'react';
import { StaticRouter, matchPath } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import routes from '../shared/routes';
import App from '../shared/App';
import Html from '../client/Html';

const port = 8000;
const server = express();

server.get('*', (req, res, next) => {
  const activeRoute = routes.find(route => matchPath(req.url, route)) || {};
  const promise = activeRoute.fetchInitialData
    ? activeRoute.fetchInitialData(req.path)
    : Promise.resolve();

  promise
    .then((data) => {
      const sheet = new ServerStyleSheet();
      const body = renderToString(
        sheet.collectStyles(
          <StaticRouter location={req.url} context={{}}>
            <App data={data} />
          </StaticRouter>,
        ),
      );
      const styles = sheet.getStyleTags();
      const title = 'Josh Ling';

      res.send(
        Html({
          body,
          styles,
          title,
        }),
      );
    })
    .catch(next);
});

server.listen(process.env.PORT || port);

console.log(`Serving at http://localhost:${port}`);
