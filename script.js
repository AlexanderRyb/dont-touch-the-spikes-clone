window.addEventListener("keydown", function (event) {
  if (event.key === " ") {
    clearInterval(interval);
    jump();
  }
});
const character = document.querySelector("#character");

//position
let x = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
let y = parseInt(window.getComputedStyle(character).getPropertyValue("bottom"));

let jumpingLeft = -3; //going left
let jumpingRight = 3; //going right
let direction = jumpingRight;
let count = 0;

let vx = direction; //horizontal velocity
let vy = 5; //vertical velocity

let ay = -0.25; //gravity
let ax = 0; //air resistance
let score = 0;
let highestScore = 0

document.getElementById("score").innerHTML = score;

document.getElementsByClassName("score").innerHTML = "fddfadd";

let interval;
function getRandomNumber() {
  let result = Math.floor(Math.random() * (10 - 1) + 1);
  return result;
}
function generateLeftObstacles() {
  //remove old obstacles
  for (let i = 1; i < 11; i++) {
    let targetBarrier = ".left-barrier-container-" + i;
    if (document.querySelector(targetBarrier).firstChild) {
      document
        .querySelector(targetBarrier)
        .removeChild(document.querySelector(targetBarrier).childNodes[0]);
    }
  }

  //generate new

  let number = getRandomNumber();
  let secondNumber = getRandomNumber()
  let chosenObstaclePlace = ".left-barrier-container-" + number;
  let chosenObstaclePlace2 = ".left-barrier-container-" + secondNumber;
  let newBarrier = document.createElement("div");
  newBarrier.className = "barrier";

  document.querySelector(".left-barrier-container-1").appendChild(newBarrier);
  document.querySelector(".left-barrier-container-2").appendChild(newBarrier);

}

function generateRightObstacles() {
  //remove old obstacles
  for (let i = 1; i < 11; i++) {
    let targetBarrier = ".right-barrier-container-" + i;
    if (document.querySelector(targetBarrier).firstChild) {
      document
        .querySelector(targetBarrier)
        .removeChild(document.querySelector(targetBarrier).childNodes[0]);
    }
  }
  //generate new obstacles
  let number = getRandomNumber();
  let chosenObstaclePlace = ".right-barrier-container-" + number;
  let newBarrier = document.createElement("div");
  newBarrier.className = "barrier";
  document.querySelector(chosenObstaclePlace).appendChild(newBarrier);
}

function newGame() {
  y = 200;
  x = 150;
  character.style.bottom = y + "px";
  character.style.left = x + "px";
  direction = jumpingRight;

  console.log("you lost! Your score is " + score);
  if(score>highestScore){
    highestScore = score
  }
  score = 0;
  console.log("highest score is "+highestScore)
  document.getElementById("top-score").innerHTML = highestScore
  document.getElementById("score").innerHTML = 0

  clearInterval(interval);
}
function jump() {
  vx = direction;
  vy = 5;
  count = 0;
  interval = setInterval(function () {
    count++;
    vx += ax;
    vy += ay;
    x += vx;
    y += vy;
    character.style.bottom = y + "px";
    character.style.left = x + "px";

    if (x > 280) {
      vx = -vx;
      direction = jumpingLeft;
      score++;

      document.getElementById("score").innerHTML = score;
      generateLeftObstacles();
    }
    if (x < 0) {
      vx = -vx;
      direction = jumpingRight;

      score++;
      document.getElementById("score").innerHTML = score;
      generateRightObstacles();
    }

    if (y < 0 || y > 370) {
      newGame();
    }
    //check if character div reached left side of the screen
    if (x < 0) {
      let leftBarrierContainer1 = document.querySelector(
        ".left-barrier-container-1"
      );
      let leftBarrierContainer2 = document.querySelector(
        ".left-barrier-container-2"
      );
      let leftBarrierContainer3 = document.querySelector(
        ".left-barrier-container-3"
      );
      let leftBarrierContainer4 = document.querySelector(
        ".left-barrier-container-4"
      );
      let leftBarrierContainer5 = document.querySelector(
        ".left-barrier-container-5"
      );
      let leftBarrierContainer6 = document.querySelector(
        ".left-barrier-container-6"
      );
      let leftBarrierContainer7 = document.querySelector(
        ".left-barrier-container-7"
      );
      let leftBarrierContainer8 = document.querySelector(
        ".left-barrier-container-8"
      );
      let leftBarrierContainer9 = document.querySelector(
        ".left-barrier-container-9"
      );
      let leftBarrierContainer10 = document.querySelector(
        ".left-barrier-container-10"
      );

      //check  where exactly did it reach it on y axis
      if (y > 360) {
        //check if an obstacle exists in that place

        if (leftBarrierContainer1.firstChild) {
          newGame();
        }
      }
      //is there any way not to repeat this code so many times?
      else if (y > 320 && y < 360 && leftBarrierContainer2.firstChild) {
        newGame();
      } else if (y > 280 && y < 320 && leftBarrierContainer3.firstChild) {
        newGame();
      } else if (y > 240 && y < 280 && leftBarrierContainer4.firstChild) {
        newGame();
      } else if (y > 200 && y < 240 && leftBarrierContainer5.firstChild) {
        newGame();
      } else if (y > 160 && y < 200 && leftBarrierContainer6.firstChild) {
        newGame();
      } else if (y > 120 && (y < 160) & leftBarrierContainer7.firstChild) {
        newGame();
      } else if (y > 80 && y < 120 && leftBarrierContainer8.firstChild) {
        newGame();
      } else if (y > 40 && y < 80 && leftBarrierContainer9.firstChild) {
        newGame();
      } else if (y > 0 && y < 40 && leftBarrierContainer10) {
        newGame();
      }
    }
    //right side touched
    let rightBarrierContainer2 = document.querySelector(
      ".right-barrier-container-2"
    );
    let rightBarrierContainer3 = document.querySelector(
      ".right-barrier-container-3"
    );
    let rightBarrierContainer4 = document.querySelector(
      ".right-barrier-container-4"
    );
    let rightBarrierContainer5 = document.querySelector(
      ".right-barrier-container-5"
    );
    let rightBarrierContainer7 = document.querySelector(
      ".right-barrier-container-7"
    );
    let rightBarrierContainer6 = document.querySelector(
      ".right-barrier-container-6"
    );
    let rightBarrierContainer8 = document.querySelector(
      ".right-barrier-container-8"
    );
    let rightBarrierContainer9 = document.querySelector(
      ".right-barrier-container-9"
    );
    let rightBarrierContainer10 = document.querySelector(
      ".right-barrier-container-10"
    );

    if (x > 280) {
      if (y > 360) {
        //check if an obstacle exists in that place
        let rightBarrierContainer1 = document.querySelector(
          ".right-barrier-container-1"
        );
        if (rightBarrierContainer1.firstChild) {
          newGame();
        }
      }
      //is there any way not to repeat this code so many times?
      else if (y > 320 && y < 360 && rightBarrierContainer2.firstChild) {
        newGame();
      } else if (y > 280 && y < 320 && rightBarrierContainer3.firstChild) {
        newGame();
      } else if (y > 240 && y < 280 && rightBarrierContainer4.firstChild) {
        newGame();
      } else if (y > 200 && y < 240 && rightBarrierContainer5.firstChild) {
        newGame();
      } else if (y > 160 && y < 200 && rightBarrierContainer6.firstChild) {
        newGame();
      } else if (y > 120 && y < 160 && rightBarrierContainer7.firstChild) {
        newGame();
      } else if (y > 80 && y < 120 && rightBarrierContainer8.firstChild) {
        if (rightBarrierContainer8.firstChild) {
          newGame();
        }
      } else if (y > 40 && y < 80) {
        if (rightBarrierContainer9.firstChild) {
          newGame();
        }
      } else if (y > 0 && y < 40) {
        if (rightBarrierContainer10.firstChild) {
          newGame();
        }
      }
    }
  }, 15);
}
