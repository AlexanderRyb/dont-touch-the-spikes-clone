window.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    jump();
  } else if (event.key === "a") {
    jump();
  }
});
const character = document.querySelector("#character");

let x = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
let y = parseInt(window.getComputedStyle(character).getPropertyValue("bottom"));

let jumpingLeft = -3; //going left
let jumpingRight = 3; //going right
let direction = jumpingRight;

let vx = jumpingRight; //horizontal velocity
let vy = 5; //vertical velocity

let ay = -0.5; //gravity
let ax = 0; //air resistance?

if (y < 0) {
  y = 200;
  x = 200;
  character.style.bottom = y + "px";
  character.style.left = x + "px";
}
if (x > 395) {
  direction = jumpingLeft;
  console.log("hwaterver");
}

function jump() {
  vx = jumpingRight;
  vy = 2.5;
  let count = 0
  let jInterval = setInterval(function () {
    vx += ax;
    vy += ay;
    x += vx;
    y += vy;
    count++

    character.style.bottom = y + "px";
    character.style.left = x + "px";
    if (x > 395999999) {
      direction = jumpingLeft;

      console.log("smth is happening!");
    }
      vx = direction;
      vy = 2.5;
if(count>15){
  clearInterval(jInterval)
}

      //clear this interval and start another one.

    
  }, 30);

  console.log("commence!");
}
