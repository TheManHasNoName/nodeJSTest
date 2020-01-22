const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

//import routes
const postsRoute = require('./routes/posts')
//middleware
app.use('/posts', postsRoute);

//Middleware


//Connect DB
mongoose.connect(process.env.DB_CONNECTION,
    { useNewUrlParser: true },
    () => console.log('connected to DB')
)

//listen to port
app.listen(3000)