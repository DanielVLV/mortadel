const passport = require('passport');
require('dotenv').config();

const GoogleStrategy = require('passport-google-oauth20').Strategy;

const { clientID, clientSecret, callbackURL } = process.env;
passport.use(new GoogleStrategy(
  {
    clientID,
    clientSecret,
    callbackURL,
    proxy: true,
  },
  ((accessToken, refreshToken, profile, done) => {
    console.log('<><><><><><><><><><><><><><><><><><><><><><><><><><><><>');
    console.log({ profile });
    console.log('<><><><><><><><><><><><><><><><><><><><><><><><><><><><>');

    return done(null, profile);
  }),
));

passport.serializeUser((user, done) => {
  console.log('<><><><><><><><><><><><>serializeUser<><><><><><><><><><><><><><><><>');
  console.log({ user });
  console.log('<><><><><><><><><><><><>serializeUser<><><><><><><><><><><><><><><><>');

  return done(null, user);
});

passport.deserializeUser((user, done) => {
  console.log('<><><><><><><><><><><><>deserializeUser<><><><><><><><><><><><><><><><>');
  console.log({ user });
  console.log('<><><><><><><><><><><><>deserializeUser<><><><><><><><><><><><><><><><>');

  return done(null, user);
});
