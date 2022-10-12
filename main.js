const prompt = require('prompt-sync')({sigint: true});

let arr = [];
let foundCorrectNumber = false;
let life = 3
let num = Math.floor(Math.random() * 11)
let wordArray = ['haaaaaaaaaaa', 'tea', 'ceeeeeb']
let one;

while(true) {
  if(wordArray[num] !== undefined) {
      one = wordArray[num].split('')
      break
  }
  num = Math.floor(Math.random() * 11)
}

let two = one.join('')
console.log("You have 3 life")

while (!foundCorrectNumber) {
  let guess = prompt('say word: ');
  
  if(guess.toLowerCase() === (one.find((val) => {if(val === guess.toLowerCase()) {return val}}))) {

    for(let j = 0; j < one.length; j++) {
      if(one[j] === (guess).toLowerCase()) {
        arr[j] = (guess).toLowerCase()
        console.log(arr);
        delete one[j]
      }
    }
    if(two === arr.join('')) {
      console.log('you win');
      foundCorrectNumber = true;
    }
  } else {
    life = life - 1
    console.log(`You have left ${life} life`)
    if(life === 0) {
      console.log('You louse :P')
      foundCorrectNumber = true;
    }
  }
}
