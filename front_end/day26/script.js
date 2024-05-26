let h1 = document.querySelector("h1");

async function changeColor(color) {
  return new Promise((resolve, reject) => {
    let internetspeed = Math.floor(Math.random() * 10) + 1;
    console.log(internetspeed);
    if (internetspeed > 0) {
      setTimeout(() => {
        h1.style.color = color;
        resolve();
      }, 1000);
    } else {
      reject("c");
    }
  });
}
async function color() {
  try {
    await changeColor("red");
    await changeColor("yellow");
    await changeColor("orange");
  } catch (error) {
    console.log(error);
  }
}
