import React from 'react';
import { renderToString } from'react-dom/server';

import App from '../FE/components/app';
import PostsController from './controllers/posts.controller';

const renderPage = (html) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <link rel="stylesheet" href="/css/main.bundle.css">
      <title>Welcome, Friends!</title>
    </head>
    <body>
      <div id="root">${html}</div>
      <script src="/bundle.js" defer></script>
    </body>
  </html>
  `;
};

const handleRender = posts => renderPage(renderToString(<App posts={posts}/>));

export default handleRender;
