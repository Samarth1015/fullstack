let msg = "help!";
console.log(msg.trim().toUpperCase());
console.log(msg);
let name = "apnacollege";
console.log(name.slice("l", "t"));
let start = ["january", "july", "march", "august"];
start.splice(0, 1);
start.splice(1, 0, "june");

console.log(start);
let test = "   ";
// let check = test.trim();
if (test.length == 0) {
  console.log("string is empty ");
}
