const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Desafio 1
// Escreva um código que imprima um por um de todos os elementos de um array.
function printElements(array) {
  array.forEach(e => {
    console.log(e);
  })
}

// Desafio 2
// Escreva um código que encontre o maior elemento de um array.
function biggerNumber(array) {
  return array.sort((a,b) => b-a)[0];
}

// Desafio 3
// Escreva um código que imprima todos os elementos de um array, exceto o primeiro e o último.
// Caso o array tenha um tamanho menor que 3 imprima a mensagem: 'Tamanho do array inválido'
function ignoreFirstAndLastElement(array) {
  if(array.length >= 3) {
    printElements(array.slice(1, -1));
  }

  else {
    console.log('Tamanho do array inválido');
  }
}

// Desafio 4
// Escreva um código que inverta a ordem dos elementos de um array.
function invertElementsArray(array) {
  let newArray = [];
  array.forEach(e => {
    newArray.unshift(e);
  })
  return newArray;
}

// Desafio 5
//  Escreva um código que recebe uma string por parâmetro e imprima a sua versão invertida.
function invertString(string) {
  let newString = [];
  string = string.split('');
  string.forEach(e => {
    newString.unshift(e);
  })

  return newString.join('');
}

// Desafio 6
// Escreva um código que receba um array de números por parâmetro e retorne
// o array com os elementos duplicados removidos.
function noDuplicates(array) {
  let newArray = [];

  array.forEach(e => {
      if(!(newArray.includes(e))) {
          newArray.push(e);
      }
  })
  
  return newArray;
}

module.exports = {
  biggerNumber,
  printElements,
  ignoreFirstAndLastElement,
  invertElementsArray,
  invertString,
  noDuplicates
}