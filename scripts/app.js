const configModal = document.getElementById("config-modal");
const backdrop = document.getElementById("backdrop");
const formElement = document.querySelector('form');
const errorElement = document.getElementById("config-error");
const gameSection = document.getElementById('active-game-section');
// const gameField = document.querySelectorAll('#active-game li');
const gameArea = document.getElementById('active-game');
const activePlayerName = document.getElementById('active-player-name');
const gameOverElement = document.getElementById('game-over');

let editedPlayerId = 0;
let activePlayer=0;
let rounds = 1;
isGameOver = false;
const player = [{
    name :'' ,
    symbol : 'X'
},{
    name :'' ,
    symbol : 'O'
}];

gameBoardData = [[0,0,0],[0,0,0],[0,0,0]];

const editPlayer1Btn = document.getElementById("edit-player1-btn");
const editPlayer2Btn = document.getElementById("edit-player2-btn");
const cancelOverBtn = document.getElementById("cancel-over-btn");
const startGameBtn = document.getElementById("start-btn");



editPlayer1Btn.addEventListener("click", openPlayerConfig);
editPlayer2Btn.addEventListener("click", openPlayerConfig);
cancelOverBtn.addEventListener("click", closeOverlay);
startGameBtn.addEventListener('click',startGame);

backdrop.addEventListener("click", closeOverlay);
formElement.addEventListener('submit',onSubmit);

// for (const gf of gameField) {
//     gf.addEventListener('click',selectGameField);
// }

gameArea.addEventListener('click',selectGameField);
