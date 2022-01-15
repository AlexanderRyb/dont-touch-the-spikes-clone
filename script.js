var character = document.getElementById("character")
var jumping = 0;


setInterval(function(){

    var characterTop = 
    parseInt(window.getComputedStyle(character).getPropertyValue("top"))
    var characterBottom =
    parseInt(window.getComputedStyle(character).getPropertyValue("bottom"))
    var characterLeft =
    parseInt(window.getComputedStyle(character).getPropertyValue("left"))
    var characterRight =
    parseInt(window.getComputedStyle(character).getPropertyValue("right"))

    var movingRight = (characterLeft+2)+"px"
    var movingLeft = (characterLeft-2)+"px" 
    var falling = (characterTop+2)+"px"

    if (jumping == 0 ){
        character.style.top = falling     

    }
    if (characterBottom <0 ){
        console.log("you lost!")
        character.style.top = 200 +"px"
        character.style.left = 200 + "px"
    }
   
},10)


function jump(){
    jumping = 1;
    let jumpCount = 0;
    var jumpInterval = setInterval(function(){
        var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        if((characterTop>6)&&(jumpCount<15)){
            character.style.top = (characterTop-5)+"px";
        }
        if(jumpCount>16){
            clearInterval(jumpInterval);
            jumping=0;
            jumpCount=0;
        }
        
        jumpCount++;
    },10);

}