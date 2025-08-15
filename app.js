let gameSeq = [];
let userSeq = [];


let btns = ["yellow", "red", "green", "purple"];


let started = false ;
let level = 0;

let h2 = document.querySelector("h2");
 
document.addEventListener("keypress", function(event) {
    if (!started) {
        started = true;
        console.log("Game started");
        levelUp();
    }
})


function levelUp(){
    userSeq = [];
    level++;
    h2.innerHTML = "Level " + level;


    let randomNum = Math.floor(Math.random() * 4);
    let randomColor = btns[randomNum];
    let randomBtn = document.querySelector(`.${randomColor}`);
    // console.log(randomNum);
    // console.log(randomColor);
    // console.log(randomBtn);
    gameSeq.push(randomColor);
    console.log(gameSeq);
    gameflash(randomBtn);

}

function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 250);
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    }, 250);
}


function checkAns(idx){

    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
           setTimeout(levelUp, 1000);
        }
    }
    else{
        console.log("wrong");
        h2.innerHTML = `Wrong! Your score is <b>${level}</b>. Press any key to restart`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(() => {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }

}


function btnPress(){
    console.log(this)
    let btn = this;
    userflash(btn);
    userColor = btn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);
    checkAns(userSeq.length-1);



}

let allbtns = document.querySelectorAll(".btn");

for (let btn of allbtns) {
    btn.addEventListener("click", btnPress);
}



function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}