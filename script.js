//  USE STRICT Mode
'use strict'

// document.querySelector(".message").textContent = `🥳 correct number`

let secretNumber = parseInt(Math.random()*10) + 1;
let score = 10;
let highscore = 0;


document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector(".guess").value);
    console.log(guess, typeof guess);
    // NOT NUMBER
    if (!guess) {
        document.querySelector(".message").textContent = `⛔ No number!`;

    }else if (guess === secretNumber) {
        document.querySelector(".message").textContent = `🥳 Correct number`,
        document.querySelector("body").style.backgroundColor = " #60b347",
        document.querySelector(".number").style.width = "30rem"
        document.querySelector('.number').textContent = secretNumber;

        if(score > highscore) {
            highscore = score,
            document.querySelector('.highscore').textContent = highscore;
        }

    }else if (guess !== secretNumber) {
        if (score > 1){
            document.querySelector('.message').textContent = guess >secretNumber ?`📈 Too high`:`📉 Too Low`;
            score--,
            document.querySelector('.score').textContent = score
        }else {
            document.querySelector(".message").textContent = `💥 You Lost The Game`,
            document.querySelector('.score').textContent = 0;
        }
    }
    // } else if ( guess > secretNumber){
    //     if (score > 1) {
    //         document.querySelector(".message").textContent = `📈 Too high`,
    //         score--,
    //         document.querySelector('.score').textContent = score;
    //     }else {
    //         document.querySelector(".message").textContent = `💥 You Lost The Game`,
    //         document.querySelector('.score').textContent = 0,
    //         document.querySelector("body").style.backgroundColor = "#630404";
    //     }
    // }else if (guess < secretNumber){
    //     if (score > 1) {
    //         document.querySelector(".message").textContent = `📉 Too Low`;
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     }else {
    //         document.querySelector(".message").textContent = `💥 You Lost The Game`;
    //         document.querySelector('.score').textContent = 0;
    //         document.querySelector("body").style.backgroundColor = "#630404";
    //     }

    // }
})

// REstratr function

document.querySelector(".again").addEventListener("click", function(){
    score= 10,
    secretNumber = parseInt(Math.random()*10) + 1,

    document.querySelector(".message").textContent = `Start guessing...`,
    document.querySelector('.score').textContent = score,
    document.querySelector('.number').textContent = '?',
    document.querySelector(".guess").value = "";
    document.querySelector("body").style.backgroundColor = "#222",
    document.querySelector(".number").style.width = "15rem"
})































