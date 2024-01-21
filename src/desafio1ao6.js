const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const arrayDupli = [3, 5, 5, 7, 9, 9, 1, 9, 2, 5, 7, 9, 2, 42, 12, 56, 87, 34, 23, 34]


// Desafio 1
// Escreva um código que imprima um por um de todos os elementos de um array.
function printElements(array) {
  array.forEach((number, index) => {
    console.log('Index: ' + index + ' Value: ' + number)
  }); 
}
printElements(array)

// Desafio 2
// Escreva um código que encontre o maior elemento de um array.
function biggerNumber(array) {
  maior = Math.max(...array)
  console.log(maior)
}
biggerNumber(array)

// Desafio 3
// Escreva um código que imprima todos os elementos de um array, exceto o primeiro e o último.
// Caso o array tenha um tamanho menor que 3 imprima a mensagem: 'Tamanho do array inválido'
function ignoreFirstAndLastElement(array) {
  
}
ignoreFirstAndLastElement(array)

// Desafio 4
// Escreva um código que inverta a ordem dos elementos de um array.
function invertElementsArray(array) {
  reversedArray = array.toReversed()
  console.log(reversedArray)
}
invertElementsArray(array)

// Desafio 5
//  Escreva um código que recebe uma string por parâmetro e imprima a sua versão invertida.

function invertString(string) {
   
}

// Desafio 6
// Escreva um código que receba um array de números por parâmetro e retorne
// o array com os elementos duplicados removidos.
function noDuplicates(arrayDupli) {
  const set = new Set(arrayDupli);
  const arraySemDuplicados = Array.from(set);
  console.log(arraySemDuplicados); 
}
noDuplicates(arrayDupli)

module.exports = {
  biggerNumber,
  printElements,
  ignoreFirstAndLastElement,
  invertElementsArray,
  invertString,
  noDuplicates
}
