let userScore = 0;
let comScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const comScorePara = document.querySelector("#com-score");

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});

const genComputerChoice = () => {
    let options = ["rock", "paper", "scissors"];
    let index = Math.floor(Math.random() * 3);
    return options[index];
}

const drawGame = () => {
    console.log("Game is draw");
    msg.innerText = "Game was Draw! Play Again.";
    msg.style.backgroundColor="darkslategrey";
}

const playGame = (userChoice) => {
    console.log("User choice = ", userChoice);
    const comChoice = genComputerChoice();
    console.log("Computer choice = ", comChoice);

    let userWin = true;
    if (userChoice === comChoice) {
        drawGame();
        return;
    } else {
        if (userChoice === "rock") {
            userWin = comChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = comChoice === "scissors" ? false : true;
        } else {
            userWin = comChoice === "rock" ? false : true;
        }
    }

    showWinner(userWin , userChoice , comChoice);
}

const showWinner = (userWin , userChoice , comChoice) => {
    if (userWin) {
        userScore ++;
        userScorePara.innerText = userScore;
        msg.innerText = `User Win!. ${userChoice} beats ${comChoice}`;
        msg.style.backgroundColor="green";
        
    } else {
        comScore ++;
        comScorePara.innerText = comScore;
        msg.innerText = `User Lose!. ${comChoice} beats ${userChoice}`
        msg.style.backgroundColor="red";
    }
}


