let arr = [100, 20, 50, 40];
let bool = arr.every((el) => {
  return el % 10 == 0;
});
console.log(bool);

// to find a min number in an array
// initial value is set as the arrays zeroth  index value

mini = arr.reduce((mini, el) => {
  if (mini > el) {
    console.log("if" + mini);
    mini = el;
    return mini;
  } else {
    console.log("else" + mini);
    return mini;
  }
});
console.log(mini);

// to find the sum
const sum = arr.reduce((sum, el) => {
  return (sum = sum + el);
});
console.log(sum);

// to find max output
let max;

max = arr.reduce((max, el) => {
  if (max < el) {
    max = el;
    return max;
  } else {
    return max;
  }
});
console.log(max);

console.log(Math.min(arr));
