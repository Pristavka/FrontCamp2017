const express = require('express');
const path = require('path');
const winston = require('winston');
const passport = require('passport');
const mongoose = require('mongoose');
const expressValidator = require('express-validator');
const flash = require('connect-flash');
const session = require('express-session');

const router = require('./src/routes/index.js');
const config = require('./src/config/config');
const passportConfig = require('./src/config/passport');

const PORT = process.env.PORT || 8080;
const app = express();

mongoose.connect(config.database);
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

// Express Session Middleware
app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true,
  cookie: { secure: true }
}));

// Express Messages Middleware
app.use(require('connect-flash')());
app.use(function (req, res, next) {
  res.locals.messages = require('express-messages')(req, res);
  next();
});

// Express Validator Middleware
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
    let namespace = param.split('.'),
      root = namespace.shift(),
      formParam = root;

    while (namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param: formParam,
      msg: msg,
      value: value
    };
  }
}));

// Passport Config
passportConfig(passport);
// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

app.get('*', (req, res, next) => {
  res.locals.user = req.user || null;
  next();
});

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
