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

document.getElementById("score").innerHTML = score;

document.getElementsByClassName("score").innerHTML = "fddfadd";

let interval;
function newGame() {
  y = 200;
  x = 150;
  character.style.bottom = y + "px";
  character.style.left = x + "px";
  direction = jumpingRight;

  console.log("you lost! Your score is " + score);
  score = 0;

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
    }
    if (x < 0) {
      vx = -vx;
      direction = jumpingRight;

      score++;
      document.getElementById("score").innerHTML = score;
    }

    if (y < 0 || y > 370) {
      newGame();
    }
    //check if character div reached left side of the screen
    if (x < 0) {
      console.log("left side touched" + y);
      //check  where exactly did it reach it on y axis
      if (y > 360) {
        //check if an obstacle exists in that place
        let leftBarrierContainer1 = document.querySelector(
          ".left-barrier-container-1"
        );
        if (leftBarrierContainer1.firstChild) {
          newGame();
        }
      }
      //is there any way not to repeat this code so many times?
      else if (y > 320 && y < 360) {
        let leftBarrierContainer2 = document.querySelector(
          ".left-barrier-container-2"
        );
        if (leftBarrierContainer2.firstChild) {
          newGame();
        }
      }
      else if (y > 280 && y < 320) {
        let leftBarrierContainer3 = document.querySelector(
          ".left-barrier-container-3"
        );
        if (leftBarrierContainer3.firstChild) {
          newGame();
        }
      }
      else if (y>240&&y<280){
        let leftBarrierContainer4 = document.querySelector(
          ".left-barrier-container-4"
        );
        if (leftBarrierContainer4.firstChild) {
      newGame()   
        }

      }
      else if (y>200&&y<240){
        let leftBarrierContainer5 = document.querySelector(
          ".left-barrier-container-5"
        );
        if (leftBarrierContainer5.firstChild) {
      newGame()   
        }

      }
      else if (y>160&&y<200){
        let leftBarrierContainer6 = document.querySelector(
          ".left-barrier-container-6"
        );
        if (leftBarrierContainer6.firstChild) {
      newGame()   
        }

      }
      else if (y>120&&y<160){
        let leftBarrierContainer7 = document.querySelector(
          ".left-barrier-container-7"
        );
        if (leftBarrierContainer7.firstChild) {
      newGame()   
        }

      }
      else if (y>80&&y<120){
        let leftBarrierContainer8 = document.querySelector(
          ".left-barrier-container-8"
        );
        if (leftBarrierContainer8.firstChild) {
      newGame()   
        }

      }
      else if (y>40&&y<80){
        let leftBarrierContainer9 = document.querySelector(
          ".left-barrier-container-9"
        );
        if (leftBarrierContainer9.firstChild) {
      newGame()   
        }

      }
      else if (y>0&&y<40){
        let leftBarrierContainer10 = document.querySelector(
          ".left-barrier-container-10"
        );
        if (leftBarrierContainer10.firstChild) {
      newGame()   
        }

      }
    }
  }, 15);
}
