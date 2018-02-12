const express = require('express');
const path = require('path');
const winston = require('winston');
const mongoose = require('mongoose');

const router = require('./src/routes/index.js');
const config = require('./config');

const PORT = process.env.PORT || 8080;
const app = express();

mongoose.connect('mongodb://localhost/blogs');
const db = mongoose.connection;

db.once('open', () => console.log('Connected to MongoDB'));
db.on('error', err => console.log(err));

const logger = winston.createLogger({
  format: winston.format.json(),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: config.winston.error, level: 'error' }),
    new winston.transports.File({ filename: config.winston.logger, level: 'info' })
  ]
});

app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'pug');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'src/public')));

app.use((req, res, next) => {
  logger.info(`The Request method is ${req.method} and path is ${req.path}`);
  next();
});

app.use(router);

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

app.listen(PORT, () => {
  console.log(`App has started on port ${PORT}`);
});

module.exports = app;
