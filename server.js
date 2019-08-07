const express       = require('express');
const mongoose      = require('mongoose');
const path          = require('path');
const config        = require('config');
const bodyParser    = require('body-parser');

const items = require("./routes/api/items");

const app = express();

// BodyParser Middleware
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to Mongo
mongoose
.connect(db, {
   
})
.then(() => console.log("MongoDB Connected..."))
.catch(err => console.log(err));

// Use Routes
app.use('/api/items', items);

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("SINYILE, SERVER HAS STARTED!!!"); 
});