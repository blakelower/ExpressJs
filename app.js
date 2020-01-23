const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const mongoose = require("mongoose");

const app = express();

//DB config
const db = require("./config/keys").MongoURI;

//Connect to Mongo
mongoose
  .connect(db, {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true})
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

//EJS MIDDLEWARE
app.use(expressLayouts);
app.set("view engine", "ejs");
//BodyParser
app.use(express.urlencoded({extended: false}));
//ROUTES
app.use("/", require("./routes/index"));
app.use("/users", require("./routes/users"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
