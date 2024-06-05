let express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
let port = 8080;
let { v4: uuidv4 } = require("uuid");

app.listen(8080, () => {
  console.log("listening to port 8080");
});
let posts = [
  { username: "samarth", content: "i love coding", id: uuidv4() },
  { username: "SAANVI", content: "i love samarth", id: uuidv4() },
  { username: "Risa", content: "i love DAD", id: uuidv4() },
];

app.get("/", (req, res) => {
  res.send("server working well");
});
app.get("/posts", (req, res) => {
  res.render("index.ejs", { posts });
});
app.get("/posts/new", (req, res) => {
  res.render("new.ejs");
});
app.post("/posts", (req, res) => {
  let { username, content } = req.body;
  let id = uuidv4();
  posts.push({ username, content, id });
  res.redirect("/posts");
});
app.get("/posts/:id", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => {
    return p.id == id;
  });
  console.log(post);
  res.render("show.ejs", { post });
});
app.get("/posts/:id/edit", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => {
    return p.id == id;
  });
  res.render("edit.ejs", { post });
});
app.patch("/posts/:id", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => {
    return p.id == id;
  });
  console.log(post);
  post.content = req.body.content;
  res.redirect("/posts");
});
app.delete("/posts/:id", (req, res) => {
  let { id } = req.params;
  posts = posts.filter((p) => {
    return p.id !== id;
  });
  console.log("ee");

  res.redirect("/posts");
});
