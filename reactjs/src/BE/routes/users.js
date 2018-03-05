import express from 'express';
import bcrypt from 'bcryptjs';
import passport from 'passport';
import Users from '../models/users';

const router = express.Router();

router.post('/register', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;
  const password2 = req.body.password2;
  
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
    else res.redirect('/');
  });
});

router.post('/login', (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/users/login'
  })(req, res, next);
});

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

export default router;
