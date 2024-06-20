function resetGame(){
    activePlayer =0;
    rounds = 1;
    isGameOver=false;
    gameOverElement.firstElementChild.innerHTML = 'You won, <span id="winner-name">PLAYER NAME!'
    gameOverElement.style.display = 'none';


    childCount = 0;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            gameBoardData[i][j] = 0;
            
            const gameBoardElement = gameArea.children[childCount];
            gameBoardElement.textContent='';
            gameBoardElement.classList.remove('disabled');
            childCount++;

        }
        
    }

    activePlayerName.textContent = player[activePlayer].name;
    gameSection.style.display= 'block';
    gameSection.children[1].style.display = 'block'; 
}

function startGame(){
    if (player[0].name == ''||player[1].name == '') {
        alert("Enter custom player names!");
        return;
    }

    resetGame();
    
    
}

function switchPlayer(){
    
    if (activePlayer == 0) {
        activePlayer=1
    }else{
        activePlayer =0
    }
    
    activePlayerName.textContent = player[activePlayer].name;

}
function selectGameField(event){
    const selectedField= event.target;

    if (selectedField.tagName != 'LI' || isGameOver) {
        return;
    }
    
    const row = selectedField.dataset.row-1;
    const column = selectedField.dataset.column-1;

    if (gameBoardData[row][column]>0) {
        alert("Select different field!");
        return;
    }

    gameBoardData[row][column] = activePlayer+1;

    selectedField.textContent = player[activePlayer].symbol;
    selectedField.classList.add('disabled');

    

    winnerId = checkGameOver();
    console.log(winnerId);

    if(winnerId != 0){
        gameOver(winnerId);
    }

    rounds++;
    switchPlayer();
}

function checkGameOver(){

    // Checking for rows
    for (let i = 0; i < 3; i++) {
        if (gameBoardData[i][0]>0 && gameBoardData[i][0] == gameBoardData[i][1] &&
            gameBoardData[i][1] == gameBoardData[i][2]
        ) {
            return gameBoardData[i][0];
        }
        
    }

    // Checking for columns
    for (let i = 0; i < 3; i++) {
        if (gameBoardData[0][i]>0 && gameBoardData[0][i] == gameBoardData[1][i] &&
            gameBoardData[1][i] == gameBoardData[2][i]
        ) {
            return gameBoardData[i][0];
        }
        
    }

    // Checking for bottom left tovtop right
        if (gameBoardData[2][0]>0 && gameBoardData[2][0] == gameBoardData[1][1] &&
            gameBoardData[1][1] == gameBoardData[0][2]
        ) {
            return gameBoardData[1][1];
        }

    // Checking for bottom right to top left
        if (gameBoardData[2][2]>0 && gameBoardData[2][2] == gameBoardData[1][1] &&
            gameBoardData[1][1] == gameBoardData[0][0]
        ) {
            return gameBoardData[1][1];
        }
    
        if(rounds == 9) 
            return -1;

        return 0;
}

function gameOver(winnerId){
    gameOverElement.style.display = 'block';
    gameSection.children[1].style.display = 'none'; 
    isGameOver = true;
    if (winnerId >0) {
        gameOverElement.firstElementChild.firstElementChild.textContent = player[winnerId-1].name
    }else{
        gameOverElement.firstElementChild.textContent = "it's a draw"
    }
}