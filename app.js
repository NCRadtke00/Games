let User;
let Computer;
let userScore;
let computerScore;
let computerChosen;
let userChosen;
var result = results();
const displayResult = document.getElementsById("results");
const computerChoice = document.getElementById("computer-choice");
const randomNumber = Math.round(Math.random() * 5);
const userChoice = document.getElementById("user-choice");
const possibleChoices = document.querySelectorAll(".choices");
//get user choice
possibleChoices.forEach((possibleChoices) =>
  possibleChoices.addEventListener("click", (e) => {
    userChosen = e.target.id;
    getComputerChoice();
    results();
    userChoice.innerHTML = userChosen;
    computerChoice.innerHTML = computerChosen;
    displayResult.innerHTML = result;
  })
);
//get random computer choice
function getComputerChoice() {
  if (randomNumber === 1) {
    return (computerChosen = "rock");
  } else if (randomNumber === 2) {
    return (computerChosen = "paper");
  } else if (randomNumber === 3) {
    return (computerChosen = "scissors");
  } else if (randomNumber === 4) {
    return (computerChosen = "lizard");
  } else if (randomNumber === 5) {
    return (computerChosen = "spock");
  }
}

//gets result of battle
function results() {
  if (computerChosen === userChosen) {
    return (result = "It is a tie");
  } else if (computerChosen === "rock") {
    if (userChosen === "scissors" || userChosen === "lizard") {
      return (result = "you win" && userScore++);
    } else {
      return (result = "you lose" && computerScore++);
    }
  } else if (computerChosen === "paper") {
    if (userChosen === "rock" || userChosen === "spock") {
      return (result = "you win" && userScore++);
    } else {
      return (result = "you lose" && computerScore++);
    }
  } else if (computerChosen === "scissors") {
    if (userChosen === "paper" || userChosen === "lizard") {
      return (result = "you win" && userScore++);
    } else {
      return (result = "you lose" && computerScore++);
    }
  } else if (computerChosen === "lizard") {
    if (userChosen === "spock" || userChosen === "paper") {
      return (result = "you win" && userScore++);
    } else {
      return (result = "you lose" && computerScore++);
    }
  } else if (computerChosen === "spock") {
    if (userChosen === "scissors" || userChosen === "rock") {
      return (result = "you win" && userScore++);
    } else {
      return (result = "you lose" && computerScore++);
    }
  }
}
