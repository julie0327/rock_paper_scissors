let yourTurn = document.querySelector(".yourturn");
let computerTurn = document.querySelector(".computerturn");
let start = document.querySelector(".start");
let main = document.querySelector(".main");
let body = document.querySelector(".body");
let yourImg = document.createElement("div");
let computerImg = document.createElement("div");
let result = document.createElement("div");

start.addEventListener("click", function () {
  let list = ["✌🏻", "👊🏻", "🖐🏻"];
  function randomYouPick() {
    let item = Math.floor(Math.random() * list.length);
    return list[item];
  }
  function randomCPick() {
    let item = Math.floor(Math.random() * list.length);
    return list[item];
  }
  let yourResult = yourTurn.appendChild(yourImg);
  let computerResult = computerTurn.appendChild(computerImg);
  yourResult.innerHTML = randomYouPick();
  computerResult.innerHTML = randomCPick();
  start.innerText = "Continue";
  function getResult() {
    if (
      (yourResult.innerHTML === "✌🏻" && computerResult.innerHTML === "✌🏻") ||
      (yourResult.innerHTML === "👊🏻" && computerResult.innerHTML === "👊🏻") ||
      (yourResult.innerHTML === "🖐🏻" && computerResult.innerHTML === "🖐🏻")
    ) {
      setTimeout(function () {
        main.innerHTML = "DRAW";
        //   window.location.href = "./result.html";
      }, 1500);
    } else if (
      (yourResult.innerHTML === "✌🏻" && computerResult.innerHTML === "🖐🏻") ||
      (yourResult.innerHTML === "🖐🏻" && computerResult.innerHTML === "👊🏻") ||
      (yourResult.innerHTML === "👊🏻" && computerResult.innerHTML === "✌🏻")
    ) {
      setTimeout(function () {
        main.innerHTML = "You Win!";
      }, 1500);
    } else if (
      (yourResult.innerHTML === "✌🏻" && computerResult.innerHTML === "👊🏻") ||
      (yourResult.innerHTML === "👊🏻" && computerResult.innerHTML === "🖐🏻") ||
      (yourResult.innerHTML === "🖐🏻" && computerResult.innerHTML === "✌🏻")
    ) {
      setTimeout(function () {
        main.innerHTML = "You Lose!";
      }, 1500);
    }
  }
  getResult();

  if ((start.innerText = "Continue")) {
    start.addEventListener("click", function () {
      console.log("!!!");
      main.innerHTML = `
        <div class="yourturn">You</div>
        ${(yourResult.innerHTML = randomYouPick())}
        <div class="computerturn">Computer</div>
        ${(computerResult.innerHTML = randomCPick())}
        `;

      getResult();
    });
  }
});
