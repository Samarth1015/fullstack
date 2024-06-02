const port = 8080;
const express = require("express");
const path = require("path");
const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.listen(port, () => {
  console.log("working on 8080");
});

app.get("/", (req, res) => {
  res.render("home.ejs");
});
app.get("/rolldice", (req, res) => {
  const dicevalue = Math.floor(Math.random() * 6) + 1;
  res.render("rolldice.ejs", { dicevalue });
});
app.get("/ig/:username", (req, res) => {
  let { username } = req.params;
  let instadata = require("./data.json");
  let userspecificdata = instadata[username];
  res.render("insta.ejs", { userspecificdata });
});
