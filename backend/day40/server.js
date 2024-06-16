const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const Chat = require("./models/index");
const methodOverride = require("method-override");
main()
  .then((resul) => {
    console.log("success connection ");
  })
  .catch((err) => {
    console.log(err);
  });
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.json());
let port = 8080;

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});

app.get("/", (req, res) => {
  res.send("Welcome!");
});
app.get("/chats", async (req, res) => {
  let chats = await Chat.find();
  res.render("index.ejs", { chats });
});

app.get("/chats/new", (req, res) => {
  res.render("new_form.ejs");
});
app.post("/chats/new", async (req, res) => {
  let { from } = req.body;
  let { msg } = req.body;
  let { to } = req.body;
  let new_chat = new Chat({
    from: `${from}`,
    msg: `${msg}`,
    to: `${to}`,
    date: new Date(),
  });
  new_chat.save();
  res.redirect("/chats");
});

app.get("/chats/:id/edit", async (req, res) => {
  let { id } = req.params;
  id.trim();
  console.log(id);
  let chat = await Chat.findById(id);
  // let user = await Chat.findById(id);

  res.render("edit.ejs", { chat });
});
app.patch("/chats/:id", (req, res) => {
  let { id } = req.params;
  let { updatedmsg } = req.body;
  Chat.findByIdAndUpdate(id, { msg: updatedmsg }, { new: true }).then(
    (resul) => {
      console.log(resul);
    }
  );
  res.redirect("/chats");
});
app.delete("/chats/:id", async (req, res) => {
  let { id } = req.params;
  await Chat.findByIdAndDelete(id);
  res.redirect("/chats");
});
