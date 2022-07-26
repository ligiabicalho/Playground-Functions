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
console.log(footballPoints(14, 8)); // 50
console.log(footballPoints(1, 2)); // 5
console.log(footballPoints(0, 0)); // 0

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

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