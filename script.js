let inputdir={x:0,y:0};
let board=document.getElementById('board');
let lastpainttime=0;
let speed=5;
let score=0;
let sarr=[
    {x:13,y:15}
]
food={x:2,y:5}
function main(ctime){
    window.requestAnimationFrame(main);
    if((ctime-lastpainttime)/1000<1/speed){
         return;
    }
    lastpainttime=ctime;
    gameengine();
}
function iscollide(sarr) {
    // in case of bump to wall
    for (let i = 1; i < sarr.length; i++) {
        if(sarr[i].x==sarr[0].x &&sarr[i].y==sarr[0].y){
            return true;
        }
    }//in case of bump to itself
    if(sarr[0].x>=18||sarr[0].x<=0 || sarr[0].y>=18||sarr[0].y<=0 ){
        return true;
    }
}
function gameengine() {
    //update the snake and food
    if(iscollide(sarr)){
        inputdir={x:0,y:0};
        alert('Game Over. Press Any Key');
        sarr=[{x:13,y:15}];
        score=0;
    }
//if snake eat the food, inc the score and regenrate the food
if(sarr[0].x==food.x && sarr[0].y==food.y){
    sarr.unshift({x:sarr[0].x+inputdir.x, y:sarr[0].y+inputdir.y})
    let a=2;
    let b=16;
    food={x:Math.round(a+(b-a)*Math.random()),y:Math.round(a+(b-a)*Math.random())}
}
//mov the snake
for (let index = sarr.length-2; index>=0; index--) {
   sarr[index+1]={...sarr[index]};    
}
sarr[0].x+=inputdir.x;
sarr[0].y+=inputdir.y;
    //display the snake
    board.innerHTML="";
    sarr.forEach((e,index)=>{
        snakelement=document.createElement('div');
        snakelement.style.gridRowStart=e.y;
        snakelement.style.gridColumnStart=e.x;
        if(index==0){
            snakelement.classList.add('head');
        }
        else{
        snakelement.classList.add('snake');}
        board.appendChild(snakelement);
    });
    //display food
    foodelement=document.createElement('div');
    foodelement.style.gridRowStart=food.y;
    foodelement.style.gridColumnStart=food.x;
    foodelement.classList.add('foot');
    board.appendChild(foodelement);
}
//main logic start here
window.requestAnimationFrame(main);
window.addEventListener('keydown',e=>{
    inputdir={x:0,y:1};
    switch (e.key) {
        case "ArrowUp":
            console.log('arrow up');
            inputdir.x=0;
            inputdir.y=-1;
            break;
            case "ArrowDown":
                console.log('arrow down');
                inputdir.x=0;
                inputdir.y=1;
                break;
                case "ArrowLeft":
                    console.log('arrow left');
                    inputdir.x=-1;
                    inputdir.y=0;
                    break;
         case "ArrowRight":
             console.log('arrow right');
             inputdir.x=1;
             inputdir.y=0;
             break;
            }
            console.log(e.key);
        })