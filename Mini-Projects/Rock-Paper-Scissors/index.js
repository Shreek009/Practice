randomNumber = Math.random();


function playerMove() {
    const playerGame = playerMove();
    const computerGame = computerMove();
    if(playerGame === 'Rock' && computerGame){

    }
}

function computerMove() {
    if(randomNumber >= 0 && randomNumber < (1/3) ) {
        alert("Computer picked Rock");
    }
    else if(randomNumber > (1/3) && randomNumber < (2/3) ) {
        alert("Computer picked paper");
    } 
    else{
        alert("Computer picked Scissors");
    }
}