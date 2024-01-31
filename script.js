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

// Variables
let userChoice;
let computerChoice;
localStorage.clear();
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
  // Remove existing classes
  element.classList.remove("rock", "scissors", "paper");

  element.classList.add(choice);
};

const updateScore = (scoreElement, scoreKey) => {
  let player = parseInt(localStorage.getItem(scoreKey)) || 0;
  player++;
  console.log(player);
  scoreElement.textContent = player;
  localStorage.setItem(scoreKey, player.toString());
};

rock.addEventListener("click", () => {
  userChoice = "rock";
  userChoiceImg.src = "images/rock.png";
  computerChoice = randomComputerChoiceImg();
  updateBorderColor(user.querySelector(".select-option"), userChoice);
  updateBorderColor(computer.querySelector(".select-option"), computerChoice);
  showResultScreen();

  if (userChoice === "rock" && computerChoice == "scissors") {
    // console.log('user');
    updateScore(userScore, "userScoreValue");
  } else if (userChoice === computerChoice) {
    // console.log('tie');
  } else {
    // console.log('pc wins');
    updateScore(computerScore, "computerScoreValue");
  }
});

scissors.addEventListener("click", () => {
  userChoice = "scissors";
  userChoiceImg.src = "images/scissors.png";
  computerChoice = randomComputerChoiceImg();
  updateBorderColor(user.querySelector(".select-option"), userChoice);
  updateBorderColor(computer.querySelector(".select-option"), computerChoice);
  showResultScreen();

  if (userChoice === "scissors" && computerChoice == "paper") {
    // console.log('user wins');
    updateScore(userScore, "userScoreValue");
  } else if (userChoice === computerChoice) {
    // console.log('tie');
  } else {
    // console.log('pc wins');
    computerScoreValue++;
    console.log(computerScoreValue);
    computerScore.textContent = computerScoreValue;
    localStorage.setItem("computerScoreValue", `${computerScoreValue}`);
  }
});

paper.addEventListener("click", () => {
  userChoice = "paper";
  userChoiceImg.src = "images/paper.png";
  computerChoice = randomComputerChoiceImg();
  updateBorderColor(user.querySelector(".select-option"), userChoice);
  updateBorderColor(computer.querySelector(".select-option"), computerChoice);
  showResultScreen();

  if (userChoice === "paper" && computerChoice == "rock") {
    // console.log('user wins');
    updateScore(userScore, "userScoreValue");
  } else if (userChoice === computerChoice) {
    // console.log('tie');
  } else {
    // console.log('pc wins');
    updateScore(computerScore, "computerScoreValue");
  }
});

playAgain.addEventListener("click", () => {
  choiceScreen.style.display = "block";
  resultScreen.style.display = "none";
});

// Rules
ruleBtn.addEventListener("click", () => {
  ruleBox.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  ruleBox.style.display = "none";
});
