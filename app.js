const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = require("express")();

/////////////// Use of local resources ///////////////
app.use(express.static("public"));

/////////////// Chosen view engine ///////////////
app.set("view engine", "ejs");

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

/////////////// Conecting to database ///////////////

mongoose.connect(
  `mongodb+srv://natanm455:natan123@cluster0.w5wza.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
);

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/heroku", (req, res) => {
  res.render("heroku");
});
app.get("/guide", (req, res) => {
  res.render("guide");
});
app.get("/check", (req, res) => {
  res.render("check");
});
app.get("/github", (req, res) =>{
  res.render("github")
} )


app.listen(process.env.PORT || 80, () => {
  console.log("server running on port 80");
});
