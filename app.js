const bodyParser = require("body-parser")
const mongoose = require('mongoose');
const express = require("express");
const app = express();
const db = require('./config/keys').mongoURI;
const likes = require('./routes/api/likes');
const users = require('./routes/api/users');
const passport = require('passport');
const resumes = require('./routes/api/resumes');
const matches = require('./routes/api/matches');
const seeds = require('./routes/api/seeds');

const matchers = require('./routes/api/matchers');

const onePages = require('./routes/api/onePages');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB successfully'))
    .catch(err => console.log(err));
    
app.use(passport.initialize());
require('./config/passport')(passport);
const port = process.env.PORT || 5000;
app.use("/api/resumes", resumes);
app.use("/api/onePages", onePages);
app.use("/api/users", users);
app.use("/api/matches", matches);
app.use("/api/likes", likes);
app.use("/api/matchers", matchers);
app.use("/api/seeds", seeds);




app.listen(port, () => console.log(`Server is running on port ${port}`));

