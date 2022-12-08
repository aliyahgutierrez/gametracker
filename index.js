document.getElementById("gameStart").addEventListener("click", function(){
    var timeleft = 60; 

    var downloadTimer = setInterval (function function1(){
        document.getElementById("countdown").innerHTML = timeleft + "&nbsp"+"TIME REMAINING";

        timeleft -= 1;
        if (timeleft <= 0){
            clearInterval(downloadTimer);
            document.getElementById("countdown").innerHTML = "GAME OVER"
        }
    }, 1000);
});





let scoreNum = 0
let scoreNum2 = 0
let score = document.getElementById("score-num")
let score2 = document.getElementById("score-num2")


document.getElementById("score-num").textContent = scoreNum
document.getElementById("score-num2").textContent = scoreNum2



function add1Pt() {
    let results = scoreNum += 1
    score.textContent = results
};

function add2Pt() {
    let results = scoreNum += 2
    score.textContent = results
};

function add3pt() {
    let results = scoreNum += 3
    score.textContent = results
};

function add1Pt1() {
    let results2 = scoreNum += 1
    score2.textContent = results2
};

function add2Pt2() {
    let results2 = scoreNum += 2
    score2.textContent = results2
};

function add3pt3() {
    let results2 = scoreNum += 3
    score2.textContent = results2
};


function gameHighlight() {
    if (scoreNum >= scoreNum2) {
        document.getElementById("score-num").style.color = 'hotpink';
    }
    else if (scoreNum2 >= scoreNum) {
        document.getElementById("score-num2").style.color = 'hotpink';

    }
}
gameHighlight();