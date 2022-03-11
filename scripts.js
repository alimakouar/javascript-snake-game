const can=document.getElementById("snakeGame");
const can_ctxt=snakeGame.getContext("2d");

can_ctxt.fillStyle="black"
can_ctxt.fillRect(0,0,can.width,can.height)
can.style.border="2px solid red";

let snake=[{x:400,y:300},{x:389,y:300},{x:378,y:300},{x:367,y:300},{x:356,y:300},{x:345,y:300}];

function drawSquare(square)
{
    can_ctxt.fillStyle='red';
    can_ctxt.strokestyle='white';
    can_ctxt.fillRect(square.x,square.y,10,10);
}

function drawSnake(snake){
    snake.forEach(drawSquare);
}

//fonction main qui dessine le serpent la 1ere fois
function main(){
    var snake=[{x:400,y:300},{x:389,y:300},{x:378,y:300},{x:367,y:300},{x:356,y:300},{x:345,y:300}];
    drawSnake(snake);
}