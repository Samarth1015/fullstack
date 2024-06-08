const express = require("express");
const app = express();
let port = 8080;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.listen(port, () => {
  console.log(`listening to port ${port}`);
});

app.get("/register", (req, res) => {
  let { username, password } = req.query;
  res.send("req was get" + username + password);
});
app.post("/register", (req, res) => {
  let { username, password } = req.body;
  res.send("req was post");
});
