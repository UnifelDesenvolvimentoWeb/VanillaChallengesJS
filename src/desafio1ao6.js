const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Desafio 1
// Escreva um código que imprima um por um de todos os elementos de um array.
function printElements(array) {
  for (let index = 0; index < array.lenght; index += 1) {
    console.log(array[index])
  }
}
//console.log(printElements(array))

// Desafio 2
// Escreva um código que encontre o maior elemento de um array.
function biggerNumber(array) {
  let maior = array.lenght
  return "Olá"
}
//console.log(biggerNumber(array))

// Desafio 3
// Escreva um código que imprima todos os elementos de um array, exceto o primeiro e o último.
// Caso o array tenha um tamanho menor que 3 imprima a mensagem: 'Tamanho do array inválido'
function ignoreFirstAndLastElement(array) {
  if (array.lenght >= 3) {
    array.pop(); array.shift()
    console.log(array)
  } else {
    console.log("Tamanho de array inválido")
  }
}
//console.log(ignoreFirstAndLastElement(array))

// Desafio 4
// Escreva um código que inverta a ordem dos elementos de um array.
function invertElementsArray(array) {
  for (let index = array.lenght; index >= 0; index -= 1) {
    console.log(array[index])
  }
}
//console.log(invertElementsArray(array))

// Desafio 5
//  Escreva um código que recebe uma string por parâmetro e imprima a sua versão invertida.
function invertString(string) {
  
}
//let test = "Gabi"
//console.log(test[2])

// Desafio 6
// Escreva um código que receba um array de números por parâmetro e retorne
// o array com os elementos duplicados removidos.
function noDuplicates(array) {
 
}

module.exports = {
  biggerNumber,
  printElements,
  ignoreFirstAndLastElement,
  invertElementsArray,
  invertString,
  noDuplicates
}
