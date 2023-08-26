const howToPlayLink = document.querySelector(".modal-lnk");
const modal = document.querySelector(".modal");
const topScoreLnk = document.querySelector(".topScore-lnk");
const modalScore = document.querySelector(".modalScoreBack");
const gotItBtn = document.querySelector(".got-it-btn");
const gotItScoreBtn = document.querySelector(".got-it-score-btn");
const gameSection = document.querySelector(".game-section");
const hitBtn = document.querySelector(".hit-btn");
const stayBtn = document.querySelector(".stay-btn");
const playerTableScore = document.querySelector(".player-score");
const dealerTableScore = document.querySelector(".dealer-score");
const gameScoreDealer = document.querySelector(".game-score-dealer");
const gameScorePlayer = document.querySelector(".game-score-player");
const exitGame = document.querySelector(".exit-game");
const input = document.querySelector("#player-name-input");
const gamer = document.querySelector(".gamer");
const topScoreList = document.querySelector(".top-score-list");
const cleanResult = document.querySelector(".Clean-btn");
const burgerBtn = document.querySelector(".burger-btn");
const mainNav = document.querySelector(".main-nav");
let playerName = "Player";

/* ---  onSubmit-check ---*/
var form = document.getElementById("player-form");
function handleForm(event) {
  event.preventDefault();
  if ((input.value.length > 1) && (input.value.length < 16)) {
    playerName = input.value;
    gameSection.classList.add("active");
    startNewGame();
  }
  gamer.textContent = playerName;
}
form.addEventListener('submit', handleForm);
/* ---  END onSubmit-check ---*/

/* ---  BurgerNENU ---*/
burgerBtn.onclick = () => {
  mainNav.classList.toggle("active");
};
/* --- END BurgerNENU ---*/

/* ---  Modal How to play ---*/
howToPlayLink.onclick = () => {
  modal.classList.add("active");
};
gotItBtn.onclick = () => {
  modal.classList.remove("active");
};
/* --- END Modal How to play ---*/

/* ---  Modal TOPSCORE ---*/
topScoreLnk.onclick = () => {
  modalScore.classList.add("active");
  topScoreList.innerHTML = "";
  let fromLocalStorage = fromJson(getData());
  if (fromLocalStorage) {
    let len = (fromLocalStorage.length >= 10) ? 10 : fromLocalStorage.length;
    for (let i = 0; i < len; i++) {
      let liItem = document.createElement("li");
      liItem.textContent = fromLocalStorage[i];
      topScoreList.append(liItem);
    }
  } else {
    let liItem = document.createElement("li");
    liItem.textContent = 'Zero game information found let\'s play';
    topScoreList.append(liItem);
  }
};
gotItScoreBtn.onclick = () => {
  modalScore.classList.remove("active");
};
cleanResult.onclick = () => {
  localStorage.removeItem('bjgame');
  modalScore.classList.remove("active");
};
/* --- END Modal TOPSCORE ---*/

/* ---  New Game plus Exit ---*/
function startNewGame() {
  buildCards();
  dealCards();
}
exitGame.onclick = () => {
  gameSection.classList.remove("active");
  clearTable();
  saveScore();
};
/* --- END New Game plus Exit ---*/

/* ---  Game Section ---*/
let gameCards = [];
let dealerAce = 0;
let playerAce = 0;
let dealerCards = [];
let playerCards = [];
let dealerSum = 0;
let playerSum = 0;
let dealerFinalSum = 0;
let playerFinalSum = 0;
let moreThan21 = false;
let gameOver = false;

function buildCards() {
  let value = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "j",
    "q",
    "k",
    "a",
  ];
  let types = ["c", "d", "h", "s"];
  let cards = [];
  value.forEach((v) => {
    types.forEach((t) => {
      cards.push(v + "-" + t);
    });
  });
  gameCards = shuffleCards(cards);
}

function dealCards() {
  let nextCard = '';
  nextCard = gameCards.pop();
  dealerCards.push(nextCard);
  dealerSum += calcValue(nextCard);
  dealerAce += checkAce(nextCard);
  dealerFinalSum = (dealerSum <= 21) ? dealerSum : sumMinusAce(dealerSum, dealerAce);

  while (dealerFinalSum < 17) {
    nextCard = gameCards.pop();
    let dealerCardImg = document.createElement("img");
    dealerCardImg.src = "./assets/img/cards/" + nextCard + ".png";
    dealerCards.push(nextCard);
    dealerSum += calcValue(nextCard);
    dealerAce += checkAce(nextCard);
    dealerFinalSum = (dealerSum <= 21) ? dealerSum : sumMinusAce(dealerSum, dealerAce);
    document.querySelector(".dealer-cards").append(dealerCardImg);
  }

  while (playerCards.length < 2) {
    nextCard = gameCards.pop();
    playerSum += calcValue(nextCard);
    playerAce += checkAce(nextCard);
    playerCards.push(nextCard);
    playerFinalSum = (playerSum <= 21) ? playerSum : sumMinusAce(playerSum, playerAce);
    let playerCardImg = document.createElement("img");
    playerCardImg.src = "./assets/img/cards/" + nextCard + ".png";
    document.querySelector(".player-cards").append(playerCardImg);
  }
  playerTableScore.innerHTML = playerFinalSum;
}

hitBtn.onclick = () => {
  if (!moreThan21) {
    let playerCardImg = document.createElement("img");
    nextCard = gameCards.pop();
    playerCardImg.src = "./assets/img/cards/" + nextCard + ".png";
    playerCards.push(nextCard);
    playerSum += calcValue(nextCard);
    playerAce += checkAce(nextCard);
    playerFinalSum = (playerSum <= 21) ? playerSum : sumMinusAce(playerSum, playerAce);
    playerTableScore.innerHTML = playerFinalSum;
    document.querySelector(".player-cards").append(playerCardImg);
    if (playerFinalSum > 21) {
      moreThan21 = true;
      gameScoreDealer.textContent = parseInt(gameScoreDealer.textContent) + 1;
      hitBtn.textContent = "GAME OVER";
      gameOver = true;
      moreThan21 = true;
      stayBtn.textContent = "NEW GAME";
    }
  }
};

stayBtn.onclick = () => {
  if (gameOver) {
    clearTable();
    startNewGame();
  } else {
    if ((playerFinalSum > dealerFinalSum) && (playerFinalSum <= 21)
    ) {
      moreThan21 = true;
      gameScorePlayer.textContent = parseInt(gameScorePlayer.textContent) + 1;
    } else if ((dealerFinalSum > 21) && (playerFinalSum <= 21)) {
      moreThan21 = true;
      gameScorePlayer.textContent = parseInt(gameScorePlayer.textContent) + 1;
    } else {
      gameScoreDealer.textContent = parseInt(gameScoreDealer.textContent) + 1;
    }
    document.querySelector(".back-card").src = "./assets/img/cards/" + dealerCards[0] + ".png";
    dealerTableScore.innerHTML = dealerFinalSum;
    gameOver = true;
    moreThan21 = true;
    hitBtn.textContent = "---";
    stayBtn.textContent = "NEW GAME";
  }
};

/**
 * Fisher-Yates Sorting Algorithm.
 * from:
 * https://www.freecodecamp.org/news/how-to-shuffle-an-array-of-items-using-javascript-or-typescript/
 */
function shuffleCards(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function calcValue(card) {
  data = card[0];
  if (isNaN(data)) {
    if (data == "a") {
      return 11;
    } else {
      return 10;
    }
  }
  if (data == "1") {
    return 10;
  } else {
    return parseInt(data);
  }
}

function checkAce(card) {
  if (card[0] == "a") {
    return 1;
  }
  return 0;
}

function sumMinusAce(sum, aceCount) {
  while (aceCount > 0) {
    sum = sum - 10;
    aceCount = aceCount - 1;
    if (sum < 21) {
      return sum;
    }
  }
  return sum;
}

function clearTable() {
  document.querySelector(".dealer-cards").innerHTML = '<img class="back-card" src="./assets/img/cards/back.png" alt="Back card"/>';
  document.querySelector(".player-cards").innerHTML = "";
  dealerTableScore.textContent = "";
  dealerSum = 0;
  dealerFinalSum = 0;
  dealerAce = 0;
  dealerCards = [];
  playerSum = 0;
  playerFinalSum = 0;
  playerAce = 0;
  playerCards = [];
  moreThan21 = false;
  gameOver = false;
  stayBtn.textContent = "STAY";
  hitBtn.textContent = "HIT";
}

function saveScore() {
  let localData = [];
  let gameScoreForSave = `${playerName}___${gameScorePlayer.textContent} -vs- ${gameScoreDealer.textContent}___Bot`;
  let fromLocalStorage = fromJson(getData());
  if (fromLocalStorage) {
    localData = fromLocalStorage;
  } else {
    localData = [];
  }
  let intScorePlayer = parseInt(gameScorePlayer.textContent);
  let intScoreDealer = parseInt(gameScoreDealer.textContent);
  if ((intScorePlayer > 0) || (intScoreDealer > 0)) {
    localData.unshift(gameScoreForSave);
  } else {
    gameScorePlayer.textContent = "00";
    gameScoreDealer.textContent = "00";
    return;
  }
  saveData(toJson(localData));
  gameScorePlayer.textContent = "00";
  gameScoreDealer.textContent = "00";

}
function toJson(data) {
  return JSON.stringify(data);
}
function fromJson(data) {
  return JSON.parse(data);
}
function saveData(data) {
  return localStorage.setItem('bjgame', data);
}
function getData() {
  return localStorage.getItem('bjgame');
}
/* ---  END Game Section ---*/