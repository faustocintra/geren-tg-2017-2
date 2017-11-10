var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

module.exports = function() {

   passport.use(new GoogleStrategy({
      clientID: '689696634981-fcbjjpdklcn2lr4ets7v9bc86h4j6i8c.apps.googleusercontent.com',
      clientSecret: 'dM0IVlh8JwgXRvxLbTGsmFC1',
      callbackURL: 'http://localhost:3000/auth/google/callback',
      scope: 'profile email'
   }, function(accessToken, refreshToken, profile, done) {

      console.log(profile);
      return done(null /* sem erros */, profile);
   }

   ));

   passport.serializeUser(function(usuario, pronto) {
      done(null, usuario._id);
   });

}