let arr = [2, 5, 9, 6];
const square = arr.map((el) => el * el);
console.log(...square);

const sum = arr.reduce((sum, el) => {
  return sum + el;
});
console.log(sum);
console.log(sum / arr.length);
const newarr = arr.map((el) => {
  return el + 5;
});
console.log(...newarr);

let arr1 = ["s", "l", "m"];

const arr_upper = arr1.map((el) => {
  return el.toUpperCase();
});

console.log(...arr_upper);

const doubleAndReturnArgs = (arr, ...arg) => {
  return [...arr, ...arg];
};

const obj1 = {
  A: "samarth",
  B: 18,
};
const obj2 = {
  name: "SAANVI",
  age: 18,
};

const mergeObjects = (obj1, obj2) => {
  return { ...obj1, ...obj2 };
};
