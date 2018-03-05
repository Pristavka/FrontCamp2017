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
};

// const currentRoute = routes.find(route => matchPath(req.url, route));
// const requestInitialData =
//   currentRoute.component.requestInitialData && currentRoute.component.requestInitialData();
// Promise.resolve(requestInitialData)
//   .then(initialData => {
//     const context = { initialData: initialData.data };

//     res.send(renderPage(
//     renderToString(
//       <Provider store={store}>
//         <StaticRouter location={req.url} context={context}>
//           <App />
//         </StaticRouter>
//       </Provider>
//     ),
//     initialData.data))
// });

export default handleRender;
