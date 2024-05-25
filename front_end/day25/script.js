let h1 = document.querySelector("h1");

// function changeColor(color, delay, change) {
//   setTimeout(() => {
//     h1.style.color = color;
//     if (change) {
//       change();
//     }
//   }, delay);
// }

// changeColor("red", 1000, () => {
//   changeColor("green", 2000, () => {
//     changeColor("orange", 3000);
//   });
// });
// call back hell above

function save_Todb(data) {
  return new Promise((resolve, reject) => {
    let internetspeed = Math.floor(Math.random() * 11) + 1;
    console.log(internetspeed);
    if (internetspeed >= 4) {
      resolve("saved!");
    } else {
      reject("not saved ");
    }
  });
}
let request = save_Todb("hello");
request
  .then(() => {
    console.log("hello");
    console.log(request);
  })
  .catch(() => {
    console.log("wrong");
  });

function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      h1.style.color = color;
      resolve();
    }, delay);
  });
}

let request2 = changeColor("red", 1000);

request2
  .then((success) => {
    console.log(success);
    return changeColor("orange", 2000); // Return the promise
  })
  .then((success) => {
    console.log(success);
    return changeColor("green", 3000); // Return the promise
  })
  .catch((error) => {
    console.log("failure access");
  });
