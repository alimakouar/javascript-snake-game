const can=document.getElementById("snakeGame");
const can_ctxt=snakeGame.getContext("2d");
var dx=11;
var dy=11;
var direction="none";
const lk=37;
const rk=39;
const uk=38;
const dk=40;

var r;
var u;
var l;
var d;

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



//pour redemarrer le jeu
function restart(){
    location.reload();
}

//pour effacer le tableau
function clear(){
    can_ctxt.fillStyle="black"
    can_ctxt.fillRect(0,0,can.width,can.height)
}

//les fonction du deplacement
function move_right(){  

         r=setTimeout(function onTick()
          {
                if(direction!="left" && !gameOver()){
                const head ={x:snake[0].x + dx, y:snake[0].y};
                snake.unshift(head);
                snake.pop();
                clear()
                drawSnake(snake);
                direction="right"
                 move_right();

                };
            },100)
}
function move_left(){
    l=setTimeout(function onTick()
    {
 if(direction!="right" && direction!="none" && !gameOver()){
    const head ={x:snake[0].x - dx, y:snake[0].y};
    snake.unshift(head);
    snake.pop();
    clear()
    drawSnake(snake);

    direction="left";
    move_left();
    };
    },100);
   
}
function move_up(){
    u=setTimeout(function onTick()
    {
    if(direction!="down" && !gameOver()){
    const head ={x:snake[0].x , y:snake[0].y -dy};
    snake.unshift(head);
    snake.pop();
    clear()
    drawSnake(snake);
    direction="up";
    move_up();
    };
},100);
}
function move_down(){
    d=setTimeout(function onTick()
    {
    if(direction!="up" && !gameOver()){
    const head ={x:snake[0].x , y:snake[0].y +dy};
    snake.unshift(head);
    snake.pop();
    clear()
    drawSnake(snake);
    direction="down"
    move_down();
    };
},100);
}


//pour le deplacement du serpent a l'aide des touches
window.addEventListener("keydown", function(event) {
    if (event.defaultPrevented) {
      return;
        }
    if (event.code === "ArrowRight"){
        if(direction!="left" && direction!="right"){
        clearTimeout(u);
        clearTimeout(l);
        clearTimeout(d);
        move_right();
        }}
    if (event.code === "ArrowLeft"){
        if(direction!="right" && direction!="left"){
        clearTimeout(r);
        clearTimeout(u);
        clearTimeout(d);
        move_left();
        }}
    if (event.code === "ArrowDown"){
        if(direction!="up" && direction!="down"){
        clearTimeout(u);
        clearTimeout(l);
        clearTimeout(r);
        move_down();
        }}
    if (event.code === "ArrowUp"){
        if(direction!="down" && direction!="up"){
        clearTimeout(l);
        clearTimeout(r);
        clearTimeout(d);
        move_up();
        }}

});

//une fonction qui detecte la fin du jeu
function gameOver()
{
    for(let i=4;i<snake.length;i++)
    {
        const has_collied = snake[i].x === snake[0].x && snake[i].y === snake[0].y
        if(has_collied){
            let res=window.confirm("Game over ! Do you want to play again ?")
            if(res==true)
        {
            location.reload()
        }
            return true;

        }
    }
    const hitLeftWall = snake[0].x < 0;
    const hitRightWall = snake[0].x > can.width - 10;
    const hitToptWall = snake[0].y < 0;
    const hitBottomWall = snake[0].y > can.height - 10;
    if (hitLeftWall || hitRightWall || hitToptWall || hitBottomWall)
    {
        let res=window.confirm("Game over ! Do you want to play again ?");
        if(res==true)
        {
            location.reload()
        }

        return true;
    }

}


$(document).ready(function(){
    $("#restart").on("click",restart);
});

//pour desactiver le scrolling de la page par les touches du clavier
window.addEventListener("keydown", function(e) {
    if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
        e.preventDefault();
    }
}, false);