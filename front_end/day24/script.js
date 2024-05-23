const btn = document.querySelector("button");
let additem = document.querySelector(".list");
btn.addEventListener("click", () => {
  let item = document.createElement("li");
  let val = gettingText();
  item.innerText = val;
  additem.appendChild(item);
});

function gettingText() {
  let input = document.querySelector("input");
  return input.value;
}
additem.addEventListener("click", function (event) {
  const deli = event.target;
  console.dir(deli);
  deli.remove();
});
