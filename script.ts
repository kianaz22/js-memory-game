/*  modal */
const modal = document.getElementById('modal');
const modalText = document.getElementById('modal-text')
const btn = document.getElementById('modal-btn')
btn!.addEventListener('click', play);
/* end of  modal */

const flags = { hasFlipped: false, freezeBoard: false };
let counter = 0
let compareArr: Array<HTMLElement> = [];

const cards = document.querySelectorAll<HTMLElement>(".card") 
cards.forEach((card) => card.addEventListener("click", flipCard));

function play() {
  modal!.style.display = 'none';
  newGame()
}
function victory(){
  modal!.style.display = 'flex';
  modalText!.textContent = 'you won! click the button to play again'
}
function newGame(){
  cards.forEach((card) => card.classList.remove("flip"));
  shuffle()
  counter = 0 
}
function shuffle() {
  cards.forEach(card => {
      let random = Math.floor(Math.random() * 12);
      card.style.order = String(random);
  });
};
function flipCard(this: HTMLElement) {
  if (flags.freezeBoard || this === compareArr[0]) return;
  this.classList.add("flip");

  if (!flags.hasFlipped) {
    flags.hasFlipped = true;
    compareArr[0] = this;
    return
  } 
    compareArr[1] = this;
    checkForMatch();
  }
function checkForMatch() {
  let result = compareArr[1]!.dataset.name === compareArr[0]!.dataset.name 
    result ? disableCards() : flipBack()
}
function disableCards() {
  compareArr.forEach((card) => removeEventListener("click", flipCard));
  resetBoard();
  if (counter === 5) {
    victory() 
    return
  }
  counter ++ 
}
function flipBack() {
  flags.freezeBoard = true;
  setTimeout(() => {
    compareArr.forEach((card) => card?.classList.remove("flip"));
    resetBoard();
  }, 1500);
}
function resetBoard() {
  flags.hasFlipped= false;
  flags.freezeBoard = false;
  compareArr = [];
}







