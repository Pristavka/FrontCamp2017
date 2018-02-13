const express = require('express');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const Users = require('../models/users');

const router = express.Router();

router.get('/register', (req, res) => {
  res.render('register', { title: 'Register' });
});

router.post('/register', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;
  const password2 = req.body.password2;

  req.checkBody('name', 'Name is required').notEmpte();
  req.checkBody('email', 'Email is required').notEmpte();
  req.checkBody('email', 'Email is not valid').isEmail();
  req.checkBody('username', 'Username is required').notEmpte();
  req.checkBody('password', 'Password is required').notEmpte();
  req.checkBody('password2', 'Passwords do not match').equals(req.body.password);

  let errors = req.validationErrors();

  if (errors) {
    res.render('register', { errors });
  } else {
    let newUser = new Users({
      name,
      email,
      username,
      password
    });

    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        newUser.password = hash;
      });
    });
    newUser.save(err => {
      if (err) res.status(400).json(err.message = 'We didn\'t save the User');
      else {
        req.flash('success', 'You are registered!');
        res.redirect('/users/login');
      }
    });
  }
});

router.get('/login', (req, res) => {
  res.render('login');
});

router.post('/login', (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/user/login',
    failureFlash: true
  })(req, res, next);
});

router.get('/logout', (req, res) => {
  req.logout();
  req.flash('success', 'You are logged out');
  res.redirect('/users/login');
});

module.exports = router;
