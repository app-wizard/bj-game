const howToPlayLink = document.querySelector(".modal-lnk");
const modal = document.querySelector(".modal");
const gotItBtn = document.querySelector(".got-it-btn");
const newGameBtn = document.querySelector(".new-game-btn");
const gameSection = document.querySelector(".game-section");
const sectionWraper = document.querySelector(".section-wraper");
const hitBtn = document.querySelector(".hit-btn");
const stayBtn = document.querySelector(".stay-btn");
const playerTableScore = document.querySelector(".player-score");
const dealerTableScore = document.querySelector(".dealer-score");
const gameScoreDealer = document.querySelector(".game-score-dealer");
const gameScorePlayer = document.querySelector(".game-score-player");

/* ---  Modal How to play ---*/
howToPlayLink.onclick = () => {
  modal.classList.add("active");
};

gotItBtn.onclick = () => {
  modal.classList.remove("active");
};
/* --- END Modal How to play ---*/

/* ---  New Game ---*/
newGameBtn.onclick = () => {
  gameSection.classList.add("active");
  startNewGame();
  setTimeout(mobileScrolFix,1500);
};

function mobileScrolFix(){
  sectionWraper.classList.add("active");
}

function startNewGame() {
  console.log('-======== NEW GAME ========-');
  buildCards();
  dealCards();
};
/* --- END New Game ---*/

/* ---  Game Section ---*/
let gameCards = [];
let dealerScore = 0;
let playerScore = 0;
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
    "J",
    "Q",
    "K",
    "A",
  ];
  let types = ["C", "D", "H", "S"];
  let cards = [];

  value.forEach((v) => {
    types.forEach((t) => {
      cards.push(v + "-" + t);
    });
  });
  console.log('-======== Cards ========-');
  console.log(cards);

  gameCards = shuffleCards(cards);

  console.log('-======== shuffleCards ========-');
  console.log(gameCards);
};

function dealCards() {
  let nextCard = '';
  // first card back side
  nextCard = gameCards.pop();
  dealerCards.push(nextCard);
  dealerSum += calcValue(nextCard);
  dealerAce += checkAce(nextCard);
  dealerFinalSum = (dealerSum < 21) ? dealerSum : sumMinusAce(dealerSum, dealerAce);
  // add diller cards

  while (dealerFinalSum < 17) {
    nextCard = gameCards.pop();
    let dealerCardImg = document.createElement("img");
    dealerCardImg.src = "./image/cards/" + nextCard + ".png";
    dealerCards.push(nextCard);
    dealerSum += calcValue(nextCard);
    dealerAce += checkAce(nextCard);
    dealerFinalSum = (dealerSum < 21) ? dealerSum : sumMinusAce(dealerSum, dealerAce);
    document.querySelector(".dealer-cards").append(dealerCardImg);
  }

  console.log('-======== dealerCards ========-');
  console.log(dealerCards);
  console.log('-======== dealerSum ========-');
  console.log(dealerSum);
  console.log('-======== dealerFinalSum ========-');
  console.log(dealerFinalSum);

  // add player cards
  while (playerCards.length < 2) {
    nextCard = gameCards.pop();
    playerSum += calcValue(nextCard);
    playerAce += checkAce(nextCard);
    playerCards.push(nextCard);
    playerFinalSum = (playerSum <= 21) ? playerSum : sumMinusAce(playerSum, playerAce);
    let playerCardImg = document.createElement("img");
    playerCardImg.src = "./image/cards/" + nextCard + ".png";
    document.querySelector(".player-cards").append(playerCardImg);
  }
  playerTableScore.innerHTML = playerFinalSum;
  console.log('-======== playerSum ========-');
  console.log(playerSum);
  console.log('-======== playerCards ========-');
  console.log(playerCards);
  console.log('-======== playerFinalSum ========-');
  console.log(playerFinalSum);

}

hitBtn.onclick = () => {
  console.log("hitBtn clk");
  if (!moreThan21) {
    let playerCardImg = document.createElement("img");
    nextCard = gameCards.pop();
    playerCardImg.src = "./image/cards/" + nextCard + ".png";
    playerCards.push(nextCard);

    playerSum += calcValue(nextCard);
    playerAce += checkAce(nextCard);
    playerFinalSum = (playerSum < 21) ? playerSum : sumMinusAce(playerSum, playerAce);
    playerTableScore.innerHTML = playerFinalSum;
    document.querySelector(".player-cards").append(playerCardImg);

    if (playerFinalSum > 21) {
      moreThan21 = true;
      console.log("-************ YOU LOOSEEE *****************-");
      gameScoreDealer.textContent = parseInt(gameScoreDealer.textContent) + 1;
      hitBtn.textContent = "GAME OVER";
      gameOver = true;
      moreThan21 = true;
      stayBtn.textContent = "NEW GAME"
    }

  };
};

stayBtn.onclick = () => {

  if (gameOver) {
    clearTable();
    startNewGame();
  } else {
    if ((playerFinalSum > dealerFinalSum) && (playerFinalSum <= 21)
    ) {
      moreThan21 = true;
      console.log("-************ YOU WINNN *****************-");
      gameScorePlayer.textContent = parseInt(gameScorePlayer.textContent) + 1;
    } else if ((dealerFinalSum > 21) && (playerFinalSum <= 21)) {
      moreThan21 = true;
      console.log("-************ YOU WINNN *****************-");
      gameScorePlayer.textContent = parseInt(gameScorePlayer.textContent) + 1;
    } else {
      console.log("-************ YOU LOOSEEE *****************-");
      gameScoreDealer.textContent = parseInt(gameScoreDealer.textContent) + 1;
    }

    document.querySelector(".back-card").src = "./image/cards/" + dealerCards[0] + ".png";
    dealerTableScore.innerHTML = dealerFinalSum;
    gameOver = true;
    hitBtn.textContent = "---";
    stayBtn.textContent = "NEW GAME"
  }
}

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
    if (data == "A") {
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
  if (card[0] == "A") {
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
  document.querySelector(".dealer-cards").innerHTML = '<img class="back-card" src="./image/cards/BACK.png" alt=""/>';
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
  stayBtn.textContent = "STAY"
  hitBtn.textContent = "HIT";
}
/* ---  END Game Section ---*/