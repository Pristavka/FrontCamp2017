import express from 'express';

import handleRender from './renderTemplate';

const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.static('public'));

app.get('*', handleRender);

app.listen(PORT, () => console.log(`App has started on port ${PORT}`));

module.exports = app;
