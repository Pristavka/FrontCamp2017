import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, matchPath } from 'react-router-dom';
import serialize from 'serialize-javascript';

//Redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../FE/reducers';

import App from '../FE/components/app';
import routes from '../FE/components/routes';

const renderPage = (html, preloadedState) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <link rel="stylesheet" href="/css/main.bundle.css">
      <script src="/bundle.js" defer></script>
      <script>window.__PRELOADED_STATE__ = ${serialize(preloadedState)}</script>
      <title>Welcome, Friends!</title>
    </head>
    <body>
      <div id="root">${html}</div>
    </body>
  </html>
  `;
};

const handleRender = (req, res) => {
  const store = createStore(reducer);
  const promises = routes.reduce((acc, route) => {
    if(matchPath(req.url, route) && route.component.WrappedComponent.requestInitialData) {
      acc.push(Promise.resolve(route.component.WrappedComponent.requestInitialData()));
    }
    return acc;
  }, []);

  Promise.all(promises)
    .then(() => {
      const context = {};
      const preloadedState = store.getState();

      res.send(
        renderPage(
          renderToString(
            <Provider store={store}>
              <StaticRouter location={req.url} context={context}>
                <App />
              </StaticRouter>
            </Provider>
          ),
          preloadedState
        )
      );
    })
    .catch(e => console.log(`Promise error: ${e}`))
};

export default handleRender;
