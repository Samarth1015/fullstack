let btn = document.querySelector("button");
let input = document.querySelector("input");

btn.addEventListener("mouseout", () => {
  btn.style.backgroundColor = "blue";
  btn.style.color = "white";
  setTimeout(() => {
    btn.style.backgroundColor = "";
    btn.style.color = "";
  }, 2000);
});
input.addEventListener("keypress", (event) => {
  console.dir(event.key);
  const tex = event.key;
  console.log(tex);
  pr(tex);
});
let str = "";

function pr(va) {
  let heading = document.querySelector("h1");
  str += va;

  heading.innerText = str;
}

const btn1 = document.createElement("button");
btn1.innerText = "Click me !!";

let body = document.querySelector("body");
body.appendChild(btn1);
btn1.addEventListener("click", function (event) {
  this.style.backgroundColor = "blue";
  this.style.color = "white";
});
