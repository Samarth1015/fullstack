let body = document.querySelector("body");
let newp_red = document.createElement("p");
newp_red.innerText = "hi am red";
body.append(newp_red);
newp_red.classList.add("red");

// let body = document.querySelector("body");
let newh1_blue = document.createElement("h1");
newh1_blue.innerText = "hi am blue";
body.append(newh1_blue);
newp_red.classList.add("blue");

const newdiv = document.createElement("div");
body.append(newdiv);
const another_h1 = document.createElement("h1");
const para = document.createElement("p");
another_h1.innerText = "hi i am in div ";
para.innerText = "i am also in div ";
newdiv.append(another_h1);
newdiv.append(para);
newdiv.classList.add("div_prp");
const input = document.createElement("input");
input.innerText = "write your name";
input.placeholder = "write your text";
body.appendChild(input);
const btn = document.createElement("button");
btn.innerText = "fuck me!!";
body.appendChild(btn);
btn.id = "button";
btn.classList.add("btn_prop");
const heading = document.createElement("h1");
heading.innerHTML = "<u> DOM practice </u>";
body.prepend(heading);
heading.style.color = "purple";
const para1 = document.createElement("p");
para1.innerHTML = "Apna college <b>Delte</b> Practice";
btn.insertAdjacentElement("beforebegin", para1);