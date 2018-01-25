const express = require('express');
const app = express();
const path = require('path');

const config = require('./config');
const index = require('./src/routes/index.js')
const blogs = require('./src/routes/blogs.js')


app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'pug');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'src/public')));

app.use('/', index);
app.use('/blogs', blogs);

app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error', { title: 'Oooops 404', message: `We did\'t find this page!` });
});

app.listen(config.server.port, () => {
  console.log(`App has started on port ${config.server.port}`);
});

module.exports = app;