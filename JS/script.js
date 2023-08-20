const howToPlayLink = document.querySelector(".modal-lnk");
const modal = document.querySelector(".modal");
const gotItBtn = document.querySelector(".got-it-btn");

/* ---  Modal How to play ---*/

howToPlayLink.onclick = () => {
    modal.classList.add("active");
  };

  gotItBtn.onclick = () => {
    modal.classList.remove("active");
  };
  /* --- END Modal How to play ---*/
  
