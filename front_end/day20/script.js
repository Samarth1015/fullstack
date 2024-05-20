const sum = (a, b) => {
  return a + b;
};

// sum = sum(1, 2);
console.log(sum(1, 2));

// write a  arrow fucntion to return square of its number
const square = (n) => {
  return n ** 2;
};

const id1 = setInterval(() => {
  console.log("hello");
}, 2000);
setTimeout(() => {
  console.log("cleared");
  clearInterval(id1);
}, 10000);
//  array avg
let arr2 = [1, 2, 3];

const array_avg = (arr) => {
  let sum = 0;
  let count = 0;
  for (value of arr) {
    sum += value;
    count++;
  }
  return sum / count;
};
console.log("hello " + array_avg(arr2));
const even = (n) => {
  if (n % 2 == 0) {
    return true;
  } else {
    return false;
  }
};
console.log(even(2));
console.log(even(3));
let length = 4;
function callback() {
  console.log("hell ", this.length);
}
console.log(this.length);
const object = {
  length: 5,
  method(callback) {
    console.log("hell");
    callback();
  },
};
object.method(callback, 1, 2);
