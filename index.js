// imports
const express = require('express');

// express app
const app = express();

// ports 
const PORT = process.env.PORT || 5000;


// routes

app.use('/', (req,res)=>{
    res.send("Hello There, welcome back!");
})



// start the server
app.listen(PORT,(err)=>{
    console.log(`Server is running on :${PORT}`);
    
})