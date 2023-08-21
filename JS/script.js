const howToPlayLink = document.querySelector(".modal-lnk");
const modal = document.querySelector(".modal");
const gotItBtn = document.querySelector(".got-it-btn");
const newGameBtn = document.querySelector(".new-game-btn");
const gameSection = document.querySelector(".game-section");

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
  setTimeout(startNewGame, 1500);
  //startNewGame();
};

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

let dealerCards = [];
let playerCards = [];

let dealerSum = 0;
let playerSum = 0;


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
  // add diller cards

  while (dealerCards.length < 2) {
    nextCard = gameCards.pop();
    let dealerCardImg = document.createElement("img");
    dealerCardImg.src = "./image/cards/" + nextCard + ".png";
    dealerCards.push(nextCard);
    dealerSum += calcValue(nextCard);
    document.querySelector(".dealer-cards").append(dealerCardImg);
   }

  console.log('-======== dealerCards ========-');
  console.log(dealerCards);
  console.log('-======== dealerSum ========-');
  console.log(dealerSum);

  // add player cards
  while (playerCards.length < 2) {
    nextCard = gameCards.pop();
    playerSum += calcValue(nextCard);
    playerCards.push(nextCard);
    let playerCardImg = document.createElement("img");
    playerCardImg.src = "./image/cards/" + nextCard + ".png";
    document.querySelector(".player-cards").append(playerCardImg);
  }
  console.log('-======== playerSum ========-');
  console.log(playerSum);
  console.log('-======== playerCards ========-');
  console.log(playerCards);

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

/* ---  END Game Section ---*/