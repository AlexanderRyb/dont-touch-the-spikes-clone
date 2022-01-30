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
let highestScore = 0;
if (score < 10) {
  document.getElementById("score").innerHTML = "0" + score;
} else if (score > 9) {
  document.getElementById("score").innerHTML = score;
}

let interval;
function getRandomNumber() {
  let result = Math.floor(Math.random() * (10 - 1) + 1);
  return result;
}
function removeOldObstacles() {
  for (let i = 1; i < 11; i++) {
    let rTargetBarrier = ".right-barrier-container-" + i;
    let lTargetBarrier = ".left-barrier-container-" + i;

    if (document.querySelector(rTargetBarrier).firstChild) {
      document
        .querySelector(rTargetBarrier)
        .removeChild(document.querySelector(rTargetBarrier).childNodes[0]);
    }
    if (document.querySelector(lTargetBarrier).firstChild) {
      document
        .querySelector(lTargetBarrier)
        .removeChild(document.querySelector(lTargetBarrier).childNodes[0]);
    }
  }
}
function generateLeftObstacles() {
  removeOldObstacles();

  //test, remove later

  let number = getRandomNumber();
  let secondNumber = getRandomNumber();
  let thirdNumber = getRandomNumber();
  let chosenObstaclePlace = ".left-barrier-container-" + number;
  let chosenObstaclePlace2 = ".left-barrier-container-" + secondNumber;
  let chosenObstaclePlace3 = ".left-barrier-container-" + thirdNumber;
  let newBarrier = document.createElement("div");
  newBarrier.className = "barrier";

  document.querySelector(chosenObstaclePlace).appendChild(newBarrier);
  document
    .querySelector(chosenObstaclePlace2)
    .appendChild(newBarrier.cloneNode(true));
  document
    .querySelector(chosenObstaclePlace3)
    .appendChild(newBarrier.cloneNode(true));
}

function generateRightObstacles() {
  removeOldObstacles();
  //generate new obstacles
  let number = getRandomNumber();
  let chosenObstaclePlace = ".right-barrier-container-" + number;
  let newBarrier = document.createElement("div");
  newBarrier.className = "barrier";
  document.querySelector(chosenObstaclePlace).appendChild(newBarrier);
}

function newGame() {
  removeOldObstacles();
  //console.log("x is "+x +" y is "+y)

  newBarrier = document.createElement("div");
  newBarrier.className = "barrier";
  //document.querySelector(".right-barrier-container-8").appendChild(newBarrier);

  document.getElementById("character").style.backgroundImage =
    "url('birdRight.png')";

  y = 200;
  x = 150;
  character.style.bottom = y + "px";
  character.style.left = x + "px";
  direction = jumpingRight;

  console.log("you lost! Your score is " + score);
  if (score > highestScore) {
    highestScore = score;
  }
  score = 0;
  console.log("highest score is " + highestScore);
  document.getElementById("top-score").innerHTML = highestScore;
  document.getElementById("score").innerHTML = 0;

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

    if (x > 260) {
      vx = -vx;
      direction = jumpingLeft;
      score++;

      if (score < 10) {
        document.getElementById("score").innerHTML = "0" + score;
      } else {
        document.getElementById("score").innerHTML = score;
      }
      document.getElementById("character").style.backgroundImage =
        "url('birdLeft.png')";
      console.log("x is" + x + " and y is " + y);

      generateLeftObstacles();
    }
    if (x < -20) {
      vx = -vx;
      direction = jumpingRight;

      score++;
      if (score < 10) {
        document.getElementById("score").innerHTML = "0" + score;
      } else {
        document.getElementById("score").innerHTML = score;
      }

      document.getElementById("character").style.backgroundImage =
        "url('birdRight.png')";
      console.log("x is" + x + " and y is " + y);

      generateRightObstacles();
    }
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
    if (y < -20 || y > 360) {
      newGame();
    }
    //check if character div reached left side of the screen
    if (x < 0) {
      //check  where exactly did it reach it on y axis
      if (y > 360) {
        //check if an obstacle exists in that place
        if (leftBarrierContainer1.firstChild) {
          newGame();
        }
      }
      //is there any way not to repeat this code so many times?
      else if (y > 300 && y < 340 && leftBarrierContainer2.firstChild) {
        newGame();
      } else if (y > 260 && y < 300 && leftBarrierContainer3.firstChild) {
        newGame();
      } else if (y > 220 && y < 260 && leftBarrierContainer4.firstChild) {
        newGame();
      } else if (y > 180 && y < 220 && leftBarrierContainer5.firstChild) {
        newGame();
      } else if (y > 140 && y < 180 && leftBarrierContainer6.firstChild) {
        newGame();
      } else if (y > 100 && (y < 140) & leftBarrierContainer7.firstChild) {
        newGame();
      } else if (y > 60 && y < 100 && leftBarrierContainer8.firstChild) {
        newGame();
      } else if (y > 20 && y < 60 && leftBarrierContainer9.firstChild) {
        newGame();
      } else if (y > 0 && y < 20 && leftBarrierContainer10) {
        newGame();
      }
    }
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
    //right side touched
    if (x > 250) {
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
      else if (y > 300 && y < 340 && rightBarrierContainer2.firstChild) {
        newGame();
      } else if (y > 260 && y < 300 && rightBarrierContainer3.firstChild) {
        newGame();
      } else if (y > 220 && y < 260 && rightBarrierContainer4.firstChild) {
        newGame();
      } else if (y > 180 && y < 220 && rightBarrierContainer5.firstChild) {
        newGame();
      } else if (y > 140 && y < 180 && rightBarrierContainer6.firstChild) {
        newGame();
      } else if (y > 100 && y < 140 && rightBarrierContainer7.firstChild) {
        newGame();
      } else if (y > 60 && y < 100 && rightBarrierContainer8.firstChild) {
        if (rightBarrierContainer8.firstChild) {
          newGame();
        }
      } else if (y > 20 && y < 60) {
        if (rightBarrierContainer9.firstChild) {
          newGame();
        }
      } else if (y > 0 && y < 20) {
        if (rightBarrierContainer10.firstChild) {
          newGame();
        }
      }
    }
  }, 15);
}
