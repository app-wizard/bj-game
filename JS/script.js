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
  buildCards();
};
/* --- END New Game ---*/

/* ---  Game Section ---*/

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

  console.log(cards);
};

/* ---  END Game Section ---*/