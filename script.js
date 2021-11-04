/*  modal */
var modal = document.getElementById('modal');
var modalText = document.getElementById('modal-text');
var btn = document.getElementById('modal-btn');
btn.addEventListener('click', play);
/* end of  modal */
var flags = { hasFlipped: false, freezeBoard: false };
var counter = 0;
var compareArr = [];
var cards = document.querySelectorAll(".card");
cards.forEach(function (card) { return card.addEventListener("click", flipCard); });
function play() {
    modal.style.display = 'none';
    newGame();
}
function victory() {
    modal.style.display = 'flex';
    modalText.textContent = 'you won! click the button to play again';
}
function newGame() {
    cards.forEach(function (card) { return card.classList.remove("flip"); });
    shuffle();
    counter = 0;
}
function shuffle() {
    cards.forEach(function (card) {
        var random = Math.floor(Math.random() * 12);
        card.style.order = String(random);
    });
}
;
function flipCard() {
    if (flags.freezeBoard || this === compareArr[0])
        return;
    this.classList.add("flip");
    if (!flags.hasFlipped) {
        flags.hasFlipped = true;
        compareArr[0] = this;
        return;
    }
    compareArr[1] = this;
    checkForMatch();
}
function checkForMatch() {
    var result = compareArr[1].dataset.name === compareArr[0].dataset.name;
    result ? disableCards() : flipBack();
}
function disableCards() {
    compareArr.forEach(function (card) { return removeEventListener("click", flipCard); });
    resetBoard();
    if (counter === 5) {
        victory();
        return;
    }
    counter++;
}
function flipBack() {
    flags.freezeBoard = true;
    setTimeout(function () {
        compareArr.forEach(function (card) { return card === null || card === void 0 ? void 0 : card.classList.remove("flip"); });
        resetBoard();
    }, 1500);
}
function resetBoard() {
    flags.hasFlipped = false;
    flags.freezeBoard = false;
    compareArr = [];
}
