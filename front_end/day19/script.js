function poem() {
  console.log("twinkle twinkle little star ");
}

poem();

// rolling dice
function roll() {
  let num = Math.floor(Math.random() * 6) + 1;
  console.log(num);
}
roll();
roll();
// function to calc avg of three number

function avg(num1, num2, num3) {
  console.log(num1, " ", num2, " ", num3);
  let result = (num1 + num2 + num3) / 3;
  console.log(" avg of three number is", result);
}

avg(1, 2, 3);
function con(arr) {
  let str = "";
  for (name of arr) {
    str += name;
  }
  return str;
}
let arr = ["samarth", "weds", "saanvi"];
let str = con(arr);
console.log(str);

// question 1
function larger_ele(arr, num) {
  let arr_return = [];
  for (value of arr) {
    if (value > num) {
      arr_return.push(value);
    }
  }
  return arr_return;
}
let arr1 = [1, 2, 3, 4, 5, 6];
let number = 4;
console.log(larger_ele(arr1, number));

// removing repetition
let str1 = "abcdabcdefgggh";

function del(str) {
  for (val of str) {
  }
}
