const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const Guru = mongoose.model('gurus');

passport.serializeUser((guru, done) => {
  done(null, guru.id);
});

passport.deserializeUser((id, done) => {
  Guru.findById(id).then(guru => {
    done(null, guru);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.goolgleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await Guru.findOne({ googleId: profile.id });
      if (existingUser) {
        // log them in
        return done(null, existingUser);
      }

      // Create a new Guru from their Google info
      const guru = await new Guru({ googleId: profile.id }).save();
      done(null, guru);
    }
  )
);
