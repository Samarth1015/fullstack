const mongoose = require("mongoose");
const Chat = require("./models/index");
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

let allchats = [
  { from: "Alice", to: "Bob", msg: "Hello, Bob!", date: new Date() },
  { from: "Bob", to: "Alice", msg: "Hi, Alice!", date: new Date() },
  { from: "Alice", to: "Charlie", msg: "Hey, Charlie!", date: new Date() },
  {
    from: "Charlie",
    to: "Alice",
    msg: "Good to see you, Alice!",
    date: new Date(),
  },
  { from: "Alice", to: "David", msg: "Hello, David!", date: new Date() },
  { from: "David", to: "Alice", msg: "Hi, Alice!", date: new Date() },
  { from: "Eve", to: "Frank", msg: "Hey, Frank!", date: new Date() },
  { from: "Frank", to: "Eve", msg: "Hi, Eve!", date: new Date() },
  { from: "Grace", to: "Heidi", msg: "Hello, Heidi!", date: new Date() },
  { from: "Heidi", to: "Grace", msg: "Hi, Grace!", date: new Date() },
  { from: "Ivan", to: "Judy", msg: "Hey, Judy!", date: new Date() },
  { from: "Judy", to: "Ivan", msg: "Hello, Ivan!", date: new Date() },
  { from: "Kathy", to: "Leo", msg: "Hi, Leo!", date: new Date() },
  { from: "Leo", to: "Kathy", msg: "Hello, Kathy!", date: new Date() },
  { from: "Mallory", to: "Nina", msg: "Hey, Nina!", date: new Date() },
  { from: "Nina", to: "Mallory", msg: "Hi, Mallory!", date: new Date() },
  { from: "Oscar", to: "Peggy", msg: "Hello, Peggy!", date: new Date() },
  { from: "Peggy", to: "Oscar", msg: "Hi, Oscar!", date: new Date() },
  { from: "Quentin", to: "Ruth", msg: "Hey, Ruth!", date: new Date() },
  { from: "Ruth", to: "Quentin", msg: "Hi, Quentin!", date: new Date() },
  { from: "Steve", to: "Trudy", msg: "Hello, Trudy!", date: new Date() },
  { from: "Trudy", to: "Steve", msg: "Hi, Steve!", date: new Date() },
  { from: "Uma", to: "Victor", msg: "Hey, Victor!", date: new Date() },
  { from: "Victor", to: "Uma", msg: "Hi, Uma!", date: new Date() },
  { from: "Walter", to: "Xander", msg: "Hello, Xander!", date: new Date() },
  { from: "Xander", to: "Walter", msg: "Hi, Walter!", date: new Date() },
  { from: "Yvonne", to: "Zara", msg: "Hey, Zara!", date: new Date() },
  { from: "Zara", to: "Yvonne", msg: "Hi, Yvonne!", date: new Date() },
  { from: "Alice", to: "Eve", msg: "Hello, Eve!", date: new Date() },
  { from: "Eve", to: "Alice", msg: "Hi, Alice!", date: new Date() },
];

Chat.insertMany(allchats);
