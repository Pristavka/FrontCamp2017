import React from 'react';
import { renderToString } from'react-dom/server';

import App from '../FE/components/app';

const renderPage = (html) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <title>Welcome, Friends!</title>
    </head>
    <body>
      <div id="root">${html}</div>
    </body>
  </html>
  `;
};

const handleRender = (req, res) => {
  const html = renderToString(<App />);
  res.send(renderPage(html));
};

export default handleRender;
