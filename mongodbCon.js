// const express = require("express");
// const app = express();
require('dotenv').config();

const mongoose = require("mongoose");

mongoose.connect(
    process.env.MONGODB_URL, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(()=>{
    console.log("db conneted")
}).catch((err)=>{
    console.log(err)
});

module.exports = mongoose;