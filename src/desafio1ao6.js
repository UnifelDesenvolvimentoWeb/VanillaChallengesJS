const array = [1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 10];
const string = 'Patrick'


// Desafio 1
// Escreva um código que imprima um por um de todos os elementos de um array.

function printElements(array) {
  for (let index = 0; index < array.length; index++) {
    console.log(array[index])
  } 
}
printElements(array)

// Desafio 2
// Escreva um código que encontre o maior elemento de um array.

function biggerNumber(array) {
  
}


// Desafio 3
// Escreva um código que imprima todos os elementos de um array, exceto o primeiro e o último.
// Caso o array tenha um tamanho menor que 3 imprima a mensagem: 'Tamanho do array inválido'

function ignoreFirstAndLastElement(array) {
  if (array.length <= 3) {
    console.log('Tamanho do array inválido')
  } else {
    let arrayUltimoIndex = array.pop()
    let arrayPrimeiroIndex = array.shift()
    console.log(array)
  }
}
ignoreFirstAndLastElement(array)

// Desafio 4
// Escreva um código que inverta a ordem dos elementos de um array.

function invertElementsArray(array) {
  let tamanho = array.length
  let esquerda = null
  let direita = null
  for (esquerda = 0, direita = tamanho - 1; esquerda < direita; esquerda +=1, direita -= 1) {
    let temp = array[esquerda]
    array[esquerda] = array[direita]
    array[direita] = temp
  }
  console.log(array) 
}
invertElementsArray(array)


// Desafio 5
//  Escreva um código que recebe uma string por parâmetro e imprima a sua versão invertida.

function invertString(string) {
  let nameInverter = string.split("").reverse().join("")
  console.log(nameInverter)  
}
invertString(string)

// Desafio 6
// Escreva um código que receba um array de números por parâmetro e retorne
// o array com os elementos duplicados removidos.

function noDuplicates(array) {
  const set = new Set(array);
  const arraySemDuplicados = Array.from(set);
  console.log(arraySemDuplicados); 
}
noDuplicates(array)

module.exports = {
  biggerNumber,
  printElements,
  ignoreFirstAndLastElement,
  invertElementsArray,
  invertString,
  noDuplicates
}