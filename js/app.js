'use strict';

var userName = prompt('Welcome to my website; what\'s your name?');
console.log('User\'s name is: ' + userName);

alert('Hello ' + userName + '; nice to meet you!');

// Matt - Question 1:
var userReady = prompt('Are you ready for some questions about me?').toLowerCase();

if(userReady === 'yes' || userReady === 'y' ){
  // console.log('Great!  Let\'s go!');
  alert('Great!  Let\'s go!');
}

// Matt - Question 2:
var responseSibling = prompt('Do I have any sisters?').toLowerCase();

if(responseSibling === 'no' || responseSibling === 'n' ){
  // console.log('Correct! I do\'nt have anu sisters');
  alert('Correct! I don\'t have any sisters');
}

  // Matt - Question 3:
var responseHome = prompt('Am I originally from Seattle?').toLowerCase();

if(responseHome === 'no' || responseHome === 'n' ){
  // console.log('Correct! I\'m originally from New York');
  alert('Correct! I\'m originally from New York');
}

// Matt - Question 4:
var responseUsaf = prompt('Did I serve in the USAF?').toLowerCase();

if(responseUsaf === 'yes' || responseUsaf === 'y' ){
  // console.log('Correct! I was a pilot in the USAF');
  alert('Correct! I was a pilot in the USAF');
}

// Matt - Question 5:
var responseDogs = prompt('Do I have any pets?').toLowerCase();

if(responseDogs === 'yes' || responseDogs === 'y' ){
  // console.log('Correct! I have 2 dogs a golden retriever and german shepard');
  alert('Correct! I have 2 dogs a golden retriever and german shepard');
}

alert(`Hey ${userName}, I hear you like guessing numbers. 

I'll provide feedback to help you zero in on the number.

Your inputs will establish the lower and upper bound of the range of possible numbers.

Please enter only integers.

You'll have exactly 4 chances to guess the number.`);

var min = prompt('Enter the LOWEST number in the range of possible numbers.');
// console.log('User\'s min number is: ' + min);
min = parseInt(min);

var max = prompt('Enter the HIGHEST number in the range of possible numbers.');
// console.log('User\'s max number is: ' + max);
max = parseInt(max);

function getRandom(min, max) {
  return (Math.floor(Math.random() * (max - min + 1) + min));
  // console.log(Math.floor(Math.random()*(max-min+1)+min));
}

var myNumber = (getRandom(min, max));
console.log(myNumber);

alert('Ok, I\'ve got my number. Remember, you have 4 guesses. Let\'s go!')

var numberArray = [];
var size = 4;

for (var i = 0; i < size; i++) {
    numberArray[i] = prompt('What\'s guess number ' + (i + 1) + '?');
    numberArray[i] = parseInt(numberArray[i]);
    console.log(numberArray);
    if (parseInt(numberArray[i]) < myNumber) {
      alert('Too low. Try again.');
    } else if (parseInt(numberArray[i]) > myNumber) {
      alert('Too high. Try again.');
    } else if (parseInt(numberArray[i]) === myNumber){
      alert('Exactly! You should probably go play the lottery.');
      break;
    } else {
      alert(`Looks like you\'re out of guesses. The number was ${myNumber}.
            Thanks for playing!`);
    }
  }

  //Still under construction
var maxAttempts = 6
var correctAnswers = []
var incorrectAnswers = []
var myColors = ['red', 'white', 'blue']
alert(`Now we'll see if you can guess my three favorite colors.
You have 6 guesses.`)

for (var i = 0; i < maxAttempts; i++) {
  var answer = prompt('Guess my favorite color. Attempt number: ' + (i + 1) + '.');
  console.log(answer)
  if (answer === myColors[i]) {
    alert(`Correct! ${answer} is on the list!`);
    correctAnswers.unshift['correct'];
    console.log(correctAnswers);
  } else if (answer !== myColors[i]) {
    incorrectAnswers.unshift[answer];
    alert(`Sorry! ${answer} is not one of my favorite colors.`);
    console.log(incorrectAnswers);
  }

} alert(`Looks like you\'re out of guesses. 
  You guessed ${correctAnswers.length} colors correctly, and
  ${incorrectAnswers.length} incorrectly.
  Thanks for playing!`);


alert('Thanks ' + userName + ' for stopping by and learning a little about me; I hope to see you again soon. Cheers!');