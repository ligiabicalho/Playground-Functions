/* eslint-disable complexity */
// Desafio 1
// const girafa = true;
// const elefante = true;
// const macaco = false;

function compareTrue(animal1, animal2) {
  if (animal1 && animal2) {
    return true;
  } return false;
}
// console.log(compareTrue(girafa, elefante)); // true
// console.log(compareTrue(girafa, macaco)); // false
// console.log(compareTrue(elefante, macaco)); // false

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}
// console.log(calcArea(10, 50)); // 250
// console.log(calcArea(5, 2)); // 5
// console.log(calcArea(51, 1)); // 25.5

// Desafio 3
function splitSentence(phrase) {
  return phrase.split(' ');
}
// console.log(splitSentence('go Trybe')); // ['go', 'Trybe']
// console.log(splitSentence('vamo que vamo')); // ['vamo', 'que', 'vamo']
// console.log(splitSentence('foguete')); // ['foguete']

// Desafio 4
function concatName(arrayString) {
  return `${arrayString[arrayString.length - 1]}, ${arrayString[0]}`;
}
// console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));
// console.log(concatName(['foguete', 'não', 'tem', 'ré']));
// console.log(concatName(['captain', 'my', 'captain']));

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}
// console.log(footballPoints(14, 8)); // 50
// console.log(footballPoints(1, 2)); // 5
// console.log(footballPoints(0, 0)); // 0

// Desafio 6
// Implemente a função highestCount que deverá retornar a quantidade de vezes que o maior número se repete ao receber um array de números. A função highestCount deve retornar a quantidade de vezes que o maior número se repete dentro do array.
// Por exemplo:
// Caso o parâmetro seja um array com valores [9, 1, 2, 3, 9, 5, 7], a função deverá retornar 2, que é a quantidade de vezes que o número 9 (maior número do array) se repete.

function highestCount(arrayNum) {
  let highestNum = arrayNum[0];
  let count = 0;

  for (let num of arrayNum) {
    for (let num of arrayNum) {
      if (num > highestNum) {
        highestNum = num;
      }
    }
    if (highestNum === num) {
      count += 1;
    }
  }
  return count;
}
// console.log(highestCount([9, 1, 2, 3, 9, 5, 7])); // 2
// console.log(highestCount([0, 4, 4, 4, 9, 2, 1])); // 1
// console.log(highestCount([0, 0, 0])); // 3

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
// console.log(catAndMouse(0, 3, 2)); // cat2
// console.log(catAndMouse(0, 6, 12)); // cat1
// console.log(catAndMouse(0, 4, 4)); // foge
// console.log(catAndMouse(1, 0, 2)); // foge

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

// console.log(fizzBuzz([2, 15, 7, 9, 45])); // ['bug!', 'fizzBuzz', 'bug!', 'fizz', 'fizzBuzz']
// console.log(fizzBuzz([7, 9])); // ['bug!', 'fizz']
// console.log(fizzBuzz([9, 25])); // ['fizz', 'buzz']

// Desafio 9
function encode(phraseVowels) {
  let objectVowels = { 'a': '1', 'e': '2', 'i': '3', 'o': '4', 'u': '5'};
  let encodeVowels = phraseVowels.replace(/[aeiou]/g, m => objectVowels[m]);

  return encodeVowels;
}
console.log(encode('hello'));
console.log(encode('How are you today?'));
console.log(encode('This is an encoding test.'));
console.log(encode('go Trybe!'));

function decode(phraseNum) {
  let objectNum = {'1':'a', '2':'e', '3':'i', '4':'o', '5':'u'};
  let encodeNum = phraseNum.replace(/[12345]/g, m => objectNum[m]);

  return encodeNum;
}
console.log(decode(encode('hello')));
console.log(decode(encode('How are you today?')));
console.log(decode(encode('This is an encoding test.')));
console.log(decode(encode('go Trybe!')));

// Desafio 10
function techList() {
  // seu código aqui
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
}