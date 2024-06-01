const port = 8080;
const express = require("express");
const path = require("path");
const app = express();
app.set("view engiene", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.listen(port, () => {
  console.log("working on 8080");
});

app.get("/", (req, res) => {
  res.render("home.ejs");
});
