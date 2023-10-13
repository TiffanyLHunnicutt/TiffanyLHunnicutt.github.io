let userScore = 0;
let computerScore = 0;
const userScoreSpan = document.getElementById("user-score");
const computerScoreSpan = document.getElementById("computer-score");
const scoreBoardDiv = document.querySelector(".scoreBoard");
const resultP = document.querySelector(".result > p");
const rockDiv = document.getElementById("r");
const paperDiv = document.getElementById("p");
const scissorsDiv = document.getElementById("s");

function getComputerChoice(){
    const computerChoice = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return computerChoice[randomNumber];
}

function convertToWords(letter){
    if(letter == 'r') return "Rock";
    if(letter == 'p') return "Paper";
    return "Scissors";
}

function wins(userChoice, computerChoice){
    userScore++;
    userScoreSpan.innerHTML = userScore;
    computerScoreSpan.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallComputerWord = "computer".fontsize(3).sub();
    resultP.innerHTML =  `${convertToWords(userChoice)}${smallUserWord} beats ${convertToWords(computerChoice)}${smallComputerWord} . You win!`;
    }

function loses(userChoice, computerChoice){
    computerScore++;
    userScoreSpan.innerHTML = userScore;
    computerScoreSpan.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallComputerWord = "computer".fontsize(3).sub();
    resultP.innerHTML =  `${convertToWords(userChoice)}${smallUserWord} loses to  ${convertToWords(computerChoice)}${smallComputerWord} . You lose!`;
}

function draw(userChoice, computerChoice){
   const smallUserWord = "user".fontsize(3).sub();
   const smallComputerWord = "computer".fontsize(3).sub();
   resultP.innerHTML =  `${convertToWords(userChoice)}${smallUserWord} equals ${convertToWords(computerChoice)}${smallComputerWord} . It is a draw!`;
}

function game(userChoice){
    const computerChoice = getComputerChoice();
switch (userChoice + computerChoice) {
    case 'rs':
    case 'pr':
    case 'sp':
        wins(userChoice, computerChoice);
        break;
    case 'rp':
    case 'ps':
    case 'sr':
        loses(userChoice, computerChoice);
        break;
    case 'rr':
    case 'pp':
    case 'ss':
        draw(userChoice, computerChoice);
        break;
    }
}

function main() {
    rockDiv.addEventListener('click', function(){
    game("r");
    })

    paperDiv.addEventListener('click', function(){
    game("p");
    })

    scissorsDiv.addEventListener('click', function(){
    game("s");
    })
}

main();