let btn = document.querySelector("button");
let box = document.querySelector("div");
let heading = document.querySelector("h1");

btn.addEventListener("click", () => {
  //   console.log(randomColor);
  heading.innerText = randomColor();
  let color = randomColor();
  box.style.backgroundColor = color;
  heading.style.color = color;
});

const randomColor = () => {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);

  let color = `rgb(${red},${green},${blue})`;
  console.log(color);
  return color;
};

// let h2 = document.querySelector("h2");
// let h3 = document.querySelector("h3");
// let h4 = document.querySelector("h4");
// let h5 = document.querySelector("h5");
// let h6 = document.querySelector("h6");

// let arr = [];
// for (let i = 0; i < 6; i++) {
//   arr.push(`h${i + 1}`);
// }
// function changeColor() {
//   this.style.backgroundColor = "blue";
// }

// for (key of arr) {
//   key.addEventListener("click", changeColor);
// }
