const mongoose = require('mongoose');
const express = require("express");
const app = express();
const db = require('./config/keys').mongoURI;
// const employees = require("./routes/api/employees");
const employers = require("./routes/api/employers")
const passport = require('passport');
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB successfully'))
    .catch(err => console.log(err));
app.use(passport.initialize());
require('./config/passport')(passport);
const port = process.env.PORT || 5000;

app.use("/api/employers", employers);

// app.post("/employer/signup", (req, res) => {
//   const empoloyer = new employers({

//   })
// })


app.listen(port, () => console.log(`Server is running on port ${port}`));

// test chas