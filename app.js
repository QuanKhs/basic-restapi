const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

const app = express();

app.use(bodyParser.json());

//Import Routes
const postsRoute = require('./routers/posts');

app.use('/posts', postsRoute);

//Routes
app.get('/', (req, res) => {
    res.send('We are on home!');
});


//Connect to db here
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true },
    () => {
        console.log('connect to Mongo');
    }
);

app.listen(3000);