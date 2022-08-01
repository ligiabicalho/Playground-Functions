// Desafio 1

function compareTrue(animal1, animal2) {
  if (animal1 && animal2) {
    return true;
  } return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(phrase) {
  return phrase.split(' ');
}

// Desafio 4
function concatName(arrayString) {
  return `${arrayString[arrayString.length - 1]}, ${arrayString[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}

// Desafio 6

function highestCount(arrayNum) {
  let highestNum = arrayNum[0];
  let count = 0;

  for (let num1 of arrayNum) {
    for (let num2 of arrayNum) {
      if (num2 > highestNum) {
        highestNum = num2;
      }
    }
    if (highestNum === num1) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distance1 = Math.abs(cat1) - Math.abs(mouse);
  let distance2 = Math.abs(cat2) - Math.abs(mouse);
  if (Math.abs(distance1) === Math.abs(distance2)) {
    return 'os gatos trombam e o rato foge';
  } if (distance1 < distance2) {
    return 'cat1';
  } return 'cat2';
}

// Desafio 8
function fizzBuzz(arrayN) {
  let result = [];
  for (let number of arrayN) {
    if (number % 3 === 0 &&
      number % 5 === 0) {
      result.push('fizzBuzz')
    } else if (number % 3 === 0) {
      result.push('fizz')
    } else if (number % 5 === 0) {
      result.push('buzz')
    } else {
      result.push('bug!') 
    }
  }
  return result;
}

// Desafio 9
function encode(phraseVowels) {
  let objectVowels = { a: '1', e: '2', i: '3', o: '4', u: '5' };
  let encodeVowels = phraseVowels.replace(/[aeiou]/g, m => objectVowels[m]);

  return encodeVowels;
}

function decode(phraseNum) {
  let objectNum = { 1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u' };
  let encodeNum = phraseNum.replace(/[12345]/g, m => objectNum[m]);

  return encodeNum;
}

// Desafio 10
function techList(techArray, name) {
  if (techArray.length === 0) {
    return 'Vazio!';
  }
  let orderArray = techArray.sort();
  let arrayObject = [];
  for (let element of orderArray) {
    let object = { tech: element, name };
    arrayObject.push(object);
  }
  return arrayObject;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
