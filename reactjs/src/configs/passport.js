const LocalStrategy = require('passport-local').Strategy;
import bcrypt from 'bcryptjs';
import User from '../BE/models/users';

export default (passport) => {
  passport.use(new LocalStrategy((username, password, done) => {
    User.findOne({ username }, (err, user) => {
      if (err) throw err;
      if (!user) return done(null, false, { message: 'No user found'});

      bcrypt.compare(password, user.password, (err, isMatch) => {
        if (err) throw err;
        if (isMatch) return done(null, user);
        return done(null, false, { message: 'Wrong password'});
      });
    });
  }));

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  
  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user);
    });
  });
};
