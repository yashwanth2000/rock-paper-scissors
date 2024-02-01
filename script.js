const rock = document.querySelector("#rock");
const scissors = document.querySelector("#scissors");
const paper = document.querySelector("#paper");
const ruleBtn = document.querySelector(".rule_btn");
const ruleBox = document.querySelector(".rule-box");
const closeBtn = document.querySelector(".close_btn");
const choiceScreen = document.querySelector(".choice_screen");
const resultScreen = document.querySelector(".result-screen");
const playAgain = document.querySelector(".playAgain");
const user = document.querySelector("#user");
const computer = document.querySelector("#computer");
const userChoiceImg = document.querySelector("#userChoiceImage");
const computerChoiceImg = document.querySelector("#computerChoiceImage");
const userScore = document.querySelector("#user-score");
const computerScore = document.querySelector("#computer-score");
const nextBtn = document.querySelector("#next-btn");
const winner = document.querySelector(".win");
const userWinIndicator = document.querySelector("#userWins");
const computerWinIndicator = document.querySelector("#computerWins");

// Variables
let userChoice;
let computerChoice;
let userScoreValue = parseInt(localStorage.getItem("userScoreValue")) || 0;
let computerScoreValue =
  parseInt(localStorage.getItem("computerScoreValue")) || 0;

userScore.textContent = userScoreValue;
computerScore.textContent = computerScoreValue;

const showResultScreen = () => {
  choiceScreen.style.display = "none";
  resultScreen.style.display = "block";
};

const randomComputerChoiceImg = () => {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  const computerChoice = choices[randomIndex];

  computerChoiceImg.src = `images/${computerChoice}.png`;
  return computerChoice;
};

const updateBorderColor = (element, choice) => {
  element.classList.remove("rock", "scissors", "paper");
  element.classList.add(choice);
};

const updateScore = (scoreElement, scoreKey) => {
  let player = parseInt(localStorage.getItem(scoreKey)) || 0;
  player++;
  scoreElement.textContent = player;
  localStorage.setItem(scoreKey, player.toString());
};

const userWins = () => {
  nextBtn.style.display = "flex";
  winner.textContent = "YOU WIN";
  playAgain.textContent = "PLAY AGAIN";
  userWinIndicator.style.display = "flex";
  computerWinIndicator.style.display = "none";
};

const tieUp = () => {
  nextBtn.style.display = "none";
  winner.textContent = "TIE UP";
  playAgain.textContent = "REPLAY";
  userWinIndicator.style.display = "none";
  computerWinIndicator.style.display = "none";
};

const computerWins = () => {
  nextBtn.style.display = "none";
  winner.textContent = "YOU LOST";
  playAgain.textContent = "PLAY AGAIN";
  userWinIndicator.style.display = "none";
  computerWinIndicator.style.display = "flex";
};

//rock
rock.addEventListener("click", () => {
  userChoice = "rock";
  userChoiceImg.src = "images/rock.png";
  computerChoice = randomComputerChoiceImg();
  updateBorderColor(user.querySelector(".select-option"), userChoice);
  updateBorderColor(computer.querySelector(".select-option"), computerChoice);
  showResultScreen();

  if (userChoice === "rock" && computerChoice == "scissors") {
    updateScore(userScore, "userScoreValue");
    userWins();
  } else if (userChoice === computerChoice) {
    tieUp();
  } else {
    updateScore(computerScore, "computerScoreValue");
    computerWins();
  }
});

//scissors
scissors.addEventListener("click", () => {
  userChoice = "scissors";
  userChoiceImg.src = "images/scissors.png";
  computerChoice = randomComputerChoiceImg();
  updateBorderColor(user.querySelector(".select-option"), userChoice);
  updateBorderColor(computer.querySelector(".select-option"), computerChoice);
  showResultScreen();

  if (userChoice === "scissors" && computerChoice == "paper") {
    updateScore(userScore, "userScoreValue");
    userWins();
  } else if (userChoice === computerChoice) {
    tieUp();
  } else {
    updateScore(computerScore, "computerScoreValue");
    computerWins();
  }
});

//paper
paper.addEventListener("click", () => {
  userChoice = "paper";
  userChoiceImg.src = "images/paper.png";
  computerChoice = randomComputerChoiceImg();
  updateBorderColor(user.querySelector(".select-option"), userChoice);
  updateBorderColor(computer.querySelector(".select-option"), computerChoice);
  showResultScreen();

  if (userChoice === "paper" && computerChoice == "rock") {
    updateScore(userScore, "userScoreValue");
    userWins();
  } else if (userChoice === computerChoice) {
    tieUp();
  } else {
    updateScore(computerScore, "computerScoreValue");
    computerWins();
  }
});

playAgain.addEventListener("click", () => {
  choiceScreen.style.display = "block";
  resultScreen.style.display = "none";
  nextBtn.style.display = "none";
});

// Rules
ruleBtn.addEventListener("click", () => {
  ruleBox.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  ruleBox.style.display = "none";
});
