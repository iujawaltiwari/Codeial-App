// const passport = require("passport");
// const googleStrategy = require("passport-google-oauth").OAuth2Strategy;
// const crypto = require("crypto");
// const User = require("../models/user");


// coding ninjas google auth not working
// //Tell passport to use a new strategy for google login
// passport.use(new googleStrategy({
//     clientID:
//       "19967972140-g74l6p6v0qdn0qfejpt7f4c1l3fajvdn.apps.googleusercontent.com",
//     clientSecret: "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",
//     callbackURL: "http://localhost:8000/users/auth/google/callback",
//   },

//   function(accessToken, refreshToken, profile, done){
//     //find a user
//      User.findOne({email: profile.emails[0].value}).exec(function(err, user){
//         if(err){
//             console.log('Error in google strategy-passport', err);
//             return;
//         }
//         console.log(profile);

//         if(user){
//             //if found set this user as req.user
//             return done(null, user);
//         }else{
//             //if not found create the user and set it as req.user
//             User.create({
//                 name: profile.displayName,
//                 email: profile.emails[0].value,
//                 password: crypto.randomBytes(20).toString('hex')
//             }, function(err, user){
//                 if(err){
//                     console.log('Error in creating user strategy-passport', err);
//                     return;
//                 }
//                 return done(null, user);
//             });
//         }
//      });
//   }


// ));

// module.exports = passport;
