let express = require("express");
let app = express();
// console.dir(express());
let port = 8080;
app.listen(port, () => {
  console.log(`server started at port ${port}`);
});

// app.use((req, res) => {
//   console.log("request done ");
//   res.send("recieved");
// });
app.get("/apple", (req, res) => {
  res.send("apple");
});

app.get("/search", (req, res) => {
  let { q, color } = req.query;
  res.send(`your query is :${q} and color is ${color}`);
});
