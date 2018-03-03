import express from 'express';
// import path from 'path';
import winston from 'winston';
import passport from 'passport';
import mongoose from 'mongoose';
import session from 'express-session';
import { fetchAllPosts } from '../api';

import handleRender from './renderTemplate';

// import router from './routes/index.js';
import config from '../configs/config';
import passportConfig from '../configs/passport';

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

// app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'html');

app.use(express.json());
app.use(express.static('public'));

// Express Session Middleware
app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true,
  cookie: { secure: true }
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

app.get('/api/posts', (req, res) => {
  res.json([
    {
      'id': 1,
      'author': 'Siarhei',
      'text': 'This is the main post in all my life!'
    },
    {
      'id': 2,
      'author': 'Aleksandra',
      'text': 'I think about it, but it is not possible!'
    },
    {
      'id': 3,
      'author': 'Valera',
      'text': 'I want to buy a new car'
    },
    {
      'id': 4,
      'author': 'Ekaterina',
      'text': 'Good job man!'
    },
    {
      'id': 5,
      'author': 'Dasha',
      'text': 'Do you speak Spanish?'
    }
  ]);
});

app.get('*', (req, res) => {
  fetchAllPosts(config.getAllPostsURL)
    .then(posts => {
      res.send(handleRender(posts));
    });
});
// app.use(router);

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error', { title: 'Oooops 404', message: 'We did\'t find this page!' });
});

app.listen(PORT, () => console.log(`App has started on port ${PORT}`));

export default app;
