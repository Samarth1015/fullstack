const mongoose = require("mongoose");

async function main() {
  mongoose.connect("mongodb://127.0.0.1:27017/test");
}

main()
  .then((resul) => {
    console.log("conn");
  })
  .catch((err) => {
    console.log(err);
  });
