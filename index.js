// imports
const express = require('express');
require('./models/User');
require('./services/passport');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');

// express app
const app = express();

app.use(cookieSession({
    maxAge:30*24*60*60*1000,
    keys: [keys.cookieKey]
}));

app.use(passport.initialize());
app.use(passport.session());

//connect to DB
mongoose.connect(keys.mongoURI, {
    useNewUrlParser: true
})

// consts
const PORT = process.env.PORT || 5000;

// routes
require('./routes/authRoutes')(app);

 


// start the server
app.listen(PORT,(err)=>{
    console.log(`Server is running on :${PORT}`);
    
})