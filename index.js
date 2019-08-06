// imports
const express = require('express');
const passport = require('passport');
const GoogleStartegy = require('passport-google-oauth20').Strategy;

// express app
const app = express();

// ports 
const PORT = process.env.PORT || 5000;

// passport to google
passport.use(new GoogleStartegy());

// routes

app.use('/', (req,res)=>{
    res.send("Hello, Be patient!");
});



// start the server
app.listen(PORT,(err)=>{
    console.log(`Server is running on :${PORT}`);
    
})