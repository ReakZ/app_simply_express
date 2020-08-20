const express = require('express');
const app = express();

const mongoose = require('mongoose');

const dotenv= require('dotenv')
dotenv.config()

// Import routes
const authRoute = require('./routes/auth')
const postRoute = require('./routes/posts')

// Connect to DB
mongoose.connect(process.env.DB_CONNECT,{useNewUrlParser:true},()=>console.log('connected to db!'))

// Middleware
app.use(express.json())

// Route middleware
app.use('/api/user',authRoute);
app.use('/api/posts',postRoute);

module.exports = app;