let color = "green";
if (color == "red") {
  console.log("stop");
} else if (color == "yellow") {
  console.log("get ready");
} else {
  console.log("go");
}
let size = "m";
if (size == "xl") {
  console.log("price is 250");
} else if (size == "l") {
  console.log("price is 200");
} else if (size == "m") {
  console.log("price is 100");
} else if (size == "s") {
  console.log("price is 50");
}
// check weather its a good string or not
let num = "samarth";
if (num[0] == "a" && num.length > 3) {
  console.log("its a good string ");
} else {
  console.log("its not a good string ");
}

// CHECK THE DAY BY THE NUMBER GIVEN BY THE USER
let number = 8;
switch (number) {
  case 1:
    console.log("Monday");

    break;
  case 2:
    console.log("tuesday");
    break;
  case 3:
    console.log("wednesday");
    break;
  case 4:
    console.log("thursday");
    break;
  case 5:
    console.log("friday ");
    break;
  case 6:
    console.log("satruday");
    break;
  case 7:
    console.log("sunday");
    break;

  default:
    console.log("write a valid number");
    break;
}

let name = prompt("write your name");
console.log(`welcome ${name}`);
let str = "samarth";
console.log(str.toLowerCase().toUpperCase());
