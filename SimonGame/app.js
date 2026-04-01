let gameSeq = [];
let userSeq = [];

let scores = [];

let started = false;
let level = 0;

let heading = document.querySelector("h3");
let colors = ["red", "blue", "green", "yellow"];

document.addEventListener("keydown", function () {
  if (started == false) {
    started = true;
    console.log("Game Started");

    levelUp();
  }
});

function gameFlash(btn) {
  btn.classList.add("gameflash");

  setTimeout(function () {
    btn.classList.remove("gameflash");
  }, 250);
}

function userFlash(btn) {
  btn.classList.add("userflash");

  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 200);
}

function levelUp() {
  userSeq = [];
  level++;
  heading.innerText = "Level " + level;

  let randomNum = Math.floor(Math.random() * 4);
  let randomColor = colors[randomNum];
  let randomBtn = document.querySelector("." + randomColor);
  gameFlash(randomBtn);

  gameSeq.push(randomColor);
  console.log(gameSeq);
  //   console.log(randomColor);
  //   console.log(randomBtn);
}

function btnPress() {
  let btn = this;
  userFlash(btn);

  let userColor = btn.getAttribute("id");
  userSeq.push(userColor);

  checkAnswer();
}

let buttons = document.querySelectorAll(".btn");
for (let btn of buttons) {
  btn.addEventListener("click", btnPress);
}

function checkAnswer() {
  let lastIndex = userSeq.length - 1;

  if (userSeq[lastIndex] === gameSeq[lastIndex]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    heading.innerHTML = ` Game Over , Your score was <b>${level}</b> <br />Press any key to restart`;
    let body = document.querySelector("body");
    let originalColor = body.style.backgroundColor;

    body.style.backgroundColor = "maroon";

    setTimeout(function () {
      body.style.backgroundColor = originalColor;
    }, 150);

    scores.push(level);

    highestScore();
    setTimeout(reset, 1000);
  }
}

function reset() {
  gameSeq = [];
  userSeq = [];
  level = 0;
  started = false;
}

function highestScore() {
  if (scores.length === 0) return;
  let highest = scores[0];
  for (let score of scores) {
    if (score > highest) {
      highest = score;
    }
  }
  let HS = document.querySelector("h4");
  HS.innerHTML = `Highest Score : ${highest}`;
}
