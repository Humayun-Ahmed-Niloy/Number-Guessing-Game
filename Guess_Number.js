'use strict';
function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}
let hiddenNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
document
  .querySelector('.check')
  .addEventListener('click', function gamelogic() {
    const guess = Number(document.querySelector('.guess').value);
    if (!guess) {
      displayMessage("'No number entered'");
    } else if (guess === hiddenNumber) {
      document.querySelector('body').style.backgroundColor = '#00cc00';
      displayMessage('Your guess was correct!!');
      score++;
      document.querySelector('.label-score').textContent = '💯 Score:' + score;
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    } else if (guess > hiddenNumber) {
      document.querySelector('body').style.backgroundColor = '#ff4000';
      if (score > 0) {
        displayMessage('Too High!');
        score--;
        document.querySelector('.label-score').textContent =
          '💯 Score:' + score;
      } else {
        displayMessage('You lose the game');
      }
    } else if (guess < hiddenNumber) {
      document.querySelector('body').style.backgroundColor = '#ff4000';
      if (score > 0) {
        displayMessage('Too Low!');
        score--;
        document.querySelector('.label-score').textContent =
          '💯 Score:' + score;
      } else {
        displayMessage('You lose the game');
      }
    }
  });

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.label-score').textContent = '💯 Score: ' + score;
  document.querySelector('body').style.backgroundColor = '#222';
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.highscore').textContent = highscore;
  gamelogic();
});
