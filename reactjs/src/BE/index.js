const express = require('express');
const path = require('path');

const handleRender = require('./renderTemplate');

const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'src/public')));

app.get('/', handleRender);

app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error', { title: 'Oooops 404', message: 'We did\'t find this page!' });
});

app.listen(PORT, () => console.log(`App has started on port ${PORT}`));

module.exports = app;
