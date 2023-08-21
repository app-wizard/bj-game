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
  startNewGame();
};

 function startNewGame () {
  console.log('-======== NEW GAME ========-');
  buildCards();
};
/* --- END New Game ---*/

/* ---  Game Section ---*/
let gameCards = [];

function buildCards(){
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

/* ---  END Game Section ---*/