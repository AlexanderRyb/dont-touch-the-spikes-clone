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
let score = 0
document.getElementById("score").innerHTML = score

document.getElementsByClassName("score").innerHTML="fddfadd"


let interval;
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

    if (x > 380) {
      vx = -vx
      direction = jumpingLeft;
      score++
    
document.getElementById("score").innerHTML = score
      

      

    }
    if (x < 0) {
      vx = -vx
      direction = jumpingRight;

      score++
      document.getElementById("score").innerHTML = score




    }

    if (y <0 || y>370) {
      y = 200;
      x = 200;
      character.style.bottom = y + "px";
      character.style.left = x + "px";
      direction = jumpingRight;

      console.log("you lost! Your score is "+ score);
      score = 0;

      clearInterval(interval)
    }
    //barrier collision detection
    
  }, 15);
}
