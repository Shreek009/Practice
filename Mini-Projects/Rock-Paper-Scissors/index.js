function playGame(playerMove){
    const computerMove = pickComputerMove();
    let result;

    if(playerMove === 'Rock'){

        if(computerMove === 'Rock') {
            result ='Its a tie';
        } else if(computerMove === 'Paper') {
            result = 'You Win';
        } else if(computerMove === 'Scissors') {
            result = 'You Lose';
        }

    } else if(playerMove === 'Scissors') {

        if(computerMove === 'Rock') {
            result ='Its a Lose';
        } else if(computerMove === 'Paper') {
            result = 'You Win';
        } else if(computerMove === 'Scissors') {
            result = 'Its a Tie';
        }

    } else if(playerMove === 'Paper') {

        if(computerMove === 'Rock') {
            result ='You Lose';
        } else if(computerMove === 'Paper') {
            result = 'Its a Tie';
        } else if(computerMove === 'Scissors') {
            result = 'You Win';
        }
        
    }

    alert(`You Picked ${playerMove}. Computer Picked ${computerMove}. ${result}`);

}


function pickComputerMove() {
    const randomNumber = Math.random();
    let computerMove = '';

    if(randomNumber >=0 && randomNumber < 1/3) {
        computerMove = 'Rock';
    } 
    else if(randomNumber > 1/3 && randomNumber < 2/3) {
        computerMove = 'Paper';
    } 
    else if(randomNumber > 2/3 && randomNumber < 1) {
        computerMove = 'Scissors';
    }
    return computerMove;
}



