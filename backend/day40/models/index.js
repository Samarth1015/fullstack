const mongoose = require("mongoose");

const chatschema = mongoose.Schema({
  from: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  msg: {
    type: String,
    maxLength: 50,
  },
  date: {
    type: Date,
  },
});

const Chat = mongoose.model("Chat", chatschema);
module.exports = Chat;
