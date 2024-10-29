let gameSeq = [];
let userSeq = [];
let btns = ["red", "green", "yellow", "blue"];
let level = 0;
let started = false;
let body = document.querySelector("body");
let h3 = document.querySelector("h3");
let btnContain = document.querySelector(".btn-container ")

document.addEventListener("keypress", function(){
    if(started == false){
        started = true;
        setTimeout(levelUp, 1000);
    }   
    console.log(body.getAttribute("class"));
    if(body.getAttribute("class") == "red"){
        body.classList.remove("red");
        body.classList.add("gradient");
    }
})

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250); 
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 250); 
}

function levelUp(){
    userSeq = [];
    level++;
    h3.innerText = `LEVEL ${level}`;
    let randIdx = Math.round(Math.random() * 3);
    let randColor = btns[randIdx];
    let randomButton = document.querySelector(`.${randColor}`)
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randomButton);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function btnPress(){
    btn = this;
    userFlash(btn);
    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length - 1);
}

function checkAns(idx) {
    if(userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
           setTimeout(levelUp, 1000);
        }
    }else{
        body.classList.remove("gradient");
        body.classList.add("red");
        h3.innerHTML = `GAME OVER!! your score was <b>${level}</b><br /> Press any key to start`;
        reset();
    }
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}