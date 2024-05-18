let arr = [1, 2, 3, 4, 5, 6, 2, 3];
let num = 2;
while (arr.includes(num)) {
  arr.splice(arr.indexOf(num), 1);
}

console.log(arr);
num = 287156;
let count = 0;
let sum = 0;
while (num != 0) {
  sum += num % 10;
  num = Math.floor(num / 10);
  //   console.log(num);

  count++;
}
console.log("number of digit in number:", count);
console.log(sum);

console.log("largest number");
let max = arr[0];
for (number of arr) {
  if (number > max) {
    max = number;
  }
}
console.log(`max number : ${max}`);
