let h4 = document.querySelector("h4");
let level = 0;
let btncolor = ["red", "green", "orange", "yellow"];

let gameseq = [];
let userseq = [];

let started = false;

document.addEventListener("keypress", function () {
  if (started == false) {
    started = true;

    levelup();
  }
});
function gameflash(btn) {
  btn.classList.add("flash");
  setTimeout(() => {
    btn.classList.remove("flash");
  }, 250);
}
function userflash(btn) {
  btn.classList.add("userflash");
  setTimeout(() => {
    btn.classList.remove("userflash");
  }, 250);
}
function levelup() {
  level++;
  h4.innerText = `Level ${level}`;
  let randindex = Math.floor(Math.random() * 4);
  let randcolor = btncolor[randindex];
  gameseq.push(randcolor);

  let btnselect = document.querySelector(`.${randcolor}`);

  gameflash(btnselect);
}
function checkAns(idx) {
  console.log(gameseq[idx], gameseq[idx]);
  console.log(typeof userseq[idx], userseq[idx]);
  if (gameseq[idx] == userseq[idx]) {
    if (userseq.length === gameseq.length) {
      userseq = [];
      setTimeout(levelup, 1000);
    }
  } else {
    let body = document.querySelector("body");
    body.classList.add("wrong");
    setTimeout(() => {
      body.classList.remove("wrong");
    }, 250);
    h4.innerHTML = `You loose the Game <b>Your score was ${level}</b> <br>Press any button to restart `;
    reset();
  }
}
function btnpress() {
  userflash(this);
  console.dir(this);
  userseq.push(this.classList[0]);
  checkAns(userseq.length - 1);
}
let btns = document.querySelectorAll("div");
for (btn of btns) {
  btn.addEventListener("click", btnpress);
}

function reset() {
  started = false;
  userseq = [];
  gameseq = [];
  level = 0;
}
