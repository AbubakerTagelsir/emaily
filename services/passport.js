const passport = require('passport');
const GoogleStartegy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');
const User = mongoose.model('users');

passport.serializeUser((user,done)=>{
    done(null,user.id);
});

passport.deserializeUser((id,done)=>{
    User.findById(id).then(user=>done(null,user));
});

passport.use(new GoogleStartegy({
    clientID:keys.googleClientID,
    clientSecret: keys.googleClientSectret,
    callbackURL: '/auth/google/callback'
}, (accessToken,refreshToken,profile,done)=>{
    User.findOne({googleId:profile.id}).then(user=>{
        if(user){
            console.log("User Already exist!");
            done(null,user);
        }else{
            new User({googleId:profile.id}).save().then(user=>done(null,user));
        }
    });
    
}));

