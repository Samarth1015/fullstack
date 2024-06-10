const { faker } = require("@faker-js/faker");

const mysql = require("mysql2");
let getobj = () => {
  return [
    faker.string.uuid(),
    faker.internet.userName(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "college",
  password: "nandini>samarth",
});
let q = "insert into user (userid,username,email,password) values ?";
let users = [];
for (let i = 0; i < 100; i++) {
  users.push(getobj());
}
try {
  connection.query(q, [users], (err, resul) => {
    if (err) {
      throw err;
    }
    console.log(resul);
  });
} catch {
  console.log(err);
}
connection.end();
console.log(getobj());
