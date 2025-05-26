let val = document.querySelectorAll("input");
console.log(val);
let btn = document.querySelectorAll("button");
let id = document.querySelectorAll("#id");
let scores = document.querySelectorAll(".score");
let reset = document.querySelector("#reset");
let winner = document.querySelector("#winner");


for (let i = 0; i < scores.length; i++) {
    btn[i].addEventListener("click", function () {
        let randomdice = Math.floor(Math.random() * 6) + 1;
        scores[i].innerHTML = randomdice;
        btn[i].disabled = true;
        max();

    });
}
function max(){
    let max = 0;
    winnerIndex = -1;
    for (let i = 0; i < scores.length; i++) {
        let big = scores[i].innerHTML;
        if (big > max) {
            max = big;
            winnerIndex = i;
        }
        else{
            max = max;
        }
        
    }
     if (winnerIndex !== -1) {
        let playerName = val[winnerIndex].value || `Player ${winnerIndex + 1}`;
        winner.innerText = `🏆 Winner is: ${playerName} with score: ${max}`;
    }
}

reset.addEventListener("click",function() {
    for (let i = 0; i < scores.length; i++){
        scores[i].innerHTML = " ";
        btn[i].disabled = false;
        val[i].value = ""

    }
    winner.innerText = "";
}

);