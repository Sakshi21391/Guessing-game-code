function checkGuess() {
    const userGuess = parseInt(document.getElementById('userGuess').value);
    const randomNumber = Math.floor(Math.random() * 10) + 1;
  
    let message = '';
  
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
      message = 'Please enter a valid number between 1 and 10.';
    } else if (userGuess === randomNumber) {
      message = 'Congratulations! You guessed the correct number!';
    } else if (userGuess < randomNumber) {
      message = 'Too low. Try again!';
    } else {
      message = 'Too high. Try again!';
    }
  
    document.getElementById('message').innerText = message;
  }
  
  