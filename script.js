window.addEventListener("keydown", function (event) {
  if (event.key === "ArrowRight") {
    jumpRight();
  } else if (event.key === "d") {
    jumpRight();
  } else if (event.key === "ArrowLeft") {
    jumpLeft();
  } else if (event.key === "a") {
    jumpLeft();
  }
});

function game(){



const character = document.querySelector("#character");
let characterTop = parseInt(
  window.getComputedStyle(character).getPropertyValue("top")
);
let characterLeft = parseInt(
  window.getComputedStyle(character).getPropertyValue("left")
);

let fallInterval = setInterval(function () {
  characterTop += 2;
  character.style.top = characterTop + "px";
  if (characterTop > 390) {
    characterTop = 200;
    characterLeft = 200;
    character.style.top = characterTop + "px";
    character.style.left = characterLeft + "px";
  }
  if (characterLeft > 390) {
    console.log("test");
  }
}, 20);

function jumpRight() {
  let count = 0;

  let jumpRightInterval = setInterval(function () {
    //move up
    if (count < 15) {
      characterTop -= 5;
      character.style.top = characterTop;
      characterLeft += 2;
      character.style.left = characterLeft + "px";
      count++;
    }
    //move dowm

    if (count > 15) {
      characterLeft += 2;
      character.style.left = characterLeft + "px";
      count++;
    }
    if (count === 30) {
      clearInterval(jumpRightInterval);
      count = 0;
    }
  }, 20);
}
function jumpLeft() {
  let count = 0;
  let jumpLeftInterval = setInterval(function () {
    if (count < 15) {
      characterTop -= 4;
      character.style.top = characterTop + "px";
      characterLeft -= 4;
      character.style.left = characterLeft + "px";
      count++;
    }
    if (count === 15) {
      clearInterval(jumpLeftInterval);
      count = 0;
    }
  }, 20);
}
}
