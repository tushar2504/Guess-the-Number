'use strict';

let number = Math.trunc(Math.random() * 20) + 1;
// To get the random number.
let score = 20;

let highscore = 0;
// set to 0.
// document.querySelector('.number').textContent = number;
// this is to dispaly the number and fix the error

document.querySelector('.check').addEventListener('click', function () {
  const guess = document.querySelector('.guess').value;
  console.log(guess);
  // on click function will execute.

  if (!guess) {
    document.querySelector('.message').textContent = '😤No Number!';
    // if there is no number.
  } else if (guess == number) {
    document.querySelector('.message').textContent = '🎉Correct Number!';

    document.querySelector('.number').textContent = number;

    document.querySelector('body').style.backgroundColor = 'red';

    document.querySelector('.message').style.width = '30rem';

    // when number is correct this will execute.

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
      // when score is higher than highscore it will execute.
    }

    // when guess is too high
  } else if (guess !== number) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > number ? '📈Too high' : '📉Too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You are a losser💩';
      document.querySelector('.score').textContent = 0;
    }
    // } else if (guess > number) {
    //   if (score > 1) {
    //     document.querySelector('.message').textContent = 'No, number is lesser';

    //     score--;

    //     document.querySelector('.score').textContent = score;
    //     // execute when number is lesser & it will also decrese score by --.
    //   } else {
    //     document.querySelector('.message').textContent = 'You are a losser💩';
    //     // when score become 0 this will execute.
    //   }

    // } else if (guess < number) {
    //   if (score > 1) {
    //     document.querySelector('.message').textContent = 'No, number is greater';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //     // execute when number is greater & it will also decrese score by --.
    //   } else {
    //     document.querySelector('.message').textContent = 'You are a losser💩';
    //     // when score become 0 this will execute.
    //   }
  } else {
    document.querySelector('.message').textContent = 'Try Again😑';
    // if nothing entered then this will execute.
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;

  number = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start guessing...';

  document.querySelector('.score').textContent = score;

  document.querySelector('.number').textContent = '?';

  document.querySelector('.guess').value = ' ';

  document.querySelector('body').style.backgroundColor = 'black';

  document.querySelector('.number').style.width = '15rem';
  // use this function to play again game, it will also show your last highscore
});
