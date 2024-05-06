function makeBubble(){
  
    let clutter ="";
for(let i = 0; i <= 230; i++){
    let rn = Math.floor(Math.random()*10);
    clutter +=`<div class="bubble">${rn}</div>`;
}
document.querySelector(".panel-btm").innerHTML = clutter;

}
let timer=60;
let score = 0;

function runTimer(){
    let timerint = setInterval(function(){
       if(timer>0){
        timer--;
       document.querySelector("#timeval").textContent = timer;
    }
    else{
        clearInterval(timerint);
        document.querySelector(".panel-btm").innerHTML=`<h3>GAME OVER<h3>`;
    }
    },1000);
}
let newHit=0;
function getNewHit(){
    newHit = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent= newHit;
}

function increseScore(){
    score+=10;
    document.querySelector("#scoreval").textContent= score;
}

function decreaseScore(){
    score-=2;
    document.querySelector("#scoreval").textContent = score;
}

document.querySelector(".panel-btm").addEventListener("click",function(dets){
   let clickedNum = (Number(dets.target.textContent));
   if(clickedNum===newHit){
    increseScore();
    makeBubble();
    getNewHit();
   }
   else if(clickedNum!==newHit && score!==0){
    decreaseScore();
   }
});








makeBubble();
runTimer();
getNewHit();