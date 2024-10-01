let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".game");
const userScorepara = document.querySelector("#user");
const compScorepara = document.querySelector("#comp");


const gencompchoice = () => {
    const option = [ "rock", "paper", "scissors"];
    const random = Math.floor(Math.random()*3)
    return option [random]
}

const drawGame = () => {
    msg.innerText = "Game was Draw. Play again."
    msg.style.backgroundColor = "darkblue"
}

const showWinner = (userwin, userChoice, compChoice) => {
    if (userwin){
        userScore++;
        userScorepara.innerText = userScore;
        msg.innerText = `You Win your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = "green"
    } else {
        compScore++;
        compScorepara.innerText = compScore;
        msg.innerText = `You Lose ${compChoice} beats your ${userChoice}`
        msg.style.backgroundColor = "red"
    }
}

const playGame = (userChoice) => {
    const compChoice = gencompchoice(); 

    if(userChoice === compChoice) {
        drawGame()
    } else {
        let userwin =  true;
        if(userChoice === "rock"){
            userwin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper"){
            userwin = compChoice === "scissors" ? false : true;
        } else {
            userwin = compChoice === "rock" ? false : true;
        }
        showWinner(userwin, userChoice, compChoice);
    }

}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        playGame(userChoice)
    });
});