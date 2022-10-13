const prompt = require('prompt-sync')({sigint: true});

let arr = [];
let foundCorrectNumber = false;
let life = 3;
let words = ['coffee', 'tea', 'juice', 'water', 'cocktail'];
let wordLetters = getTheWord();

function getTheWord() {
  let num = Math.floor(Math.random() * (words.length + 1));
  if (words[num] !== undefined) {
   return words[num].split("");
  }
}

let theWord = wordLetters.join('');
for(let i = 0; i < theWord.length; i++) {
  arr.push('');
}

console.log(arr);
console.log("You have 3 life");

while (!foundCorrectNumber) {
  let guess = prompt('Guess a letter: ').toLowerCase();
  
  if(guess === (wordLetters.find((val) => {if(val === guess) {return val}}))) {

    for(let j = 0; j < wordLetters.length; j++) {
      if(wordLetters[j] === (guess)) {
        arr[j] = (guess);
        console.log(arr);
        delete wordLetters[j];
      }
    }
    if(theWord === arr.join('')) {
      console.log('you win');
      foundCorrectNumber = true;
    }
  } else {
    life = life - 1
    console.log(`You have left ${life} life`)
    if(life === 0) {
      console.log('You louse :P');
      foundCorrectNumber = true;
    }
  }
}
