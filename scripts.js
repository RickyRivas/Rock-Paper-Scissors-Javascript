function computerPlay() {
      const number = (Math.random() * 3);
   if (number <= 1) {
    return 'Rock';
  } else if ( number >= 2) {
    return 'Scissors';
  } else 
  return 'Paper' ;
}


  function playRound (computerSelection, playerSelection) {
    if (computerSelection == 'Rock' && playerSelection == 'Paper') {
    return 'You win!';
  } else if (computerSelection == 'Paper' && playerSelection == 'Rock') {
    return 'You lose';
  } else if (computerSelection == 'Scissors' && playerSelection == 'Paper') {
    return 'You lose';
  } else if (computerSelection == 'Paper' && playerSelection == 'Scissors') {
    return 'You Win';
  } else if (computerSelection == 'Rock' && playerSelection == 'Scissors') {
    return 'You lose';
  } else if (computerSelection == 'Scissors' && playerSelection == 'Rock') {
    return 'You Win';
  } else (computerSelection === playerSelection) 
  return 'its a draw!';
  }




  const playerSelection = prompt('Rock, Paper or Scissors?');
  const computerSelection = computerPlay();

  function game() {
    for (let i = 0; i < 5; i++) {
    console.log(playRound(computerSelection, playerSelection), i);
    }
  }
  console.log(game(computerSelection, playerSelection));
 