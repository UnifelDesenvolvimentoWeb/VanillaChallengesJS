const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const array2 = [1, 2, 3, 3, 4, 5, 5, 6, 7, 8, 8, 9, 10];

// Desafio 1
// Escreva um código que imprima um por um de todos os elementos de um array.
function printElements(array) {
  console.log("desafio 1")
  array.forEach(element => {
    console.log(element)
  });
}
printElements(array)

// Desafio 2
// Escreva um código que encontre o maior elemento de um array.
function biggerNumber(array) {
  console.log("desafio 2")
  console.log(Math.max.apply(null,array))
}
biggerNumber(array)

// Desafio 3
// Escreva um código que imprima todos os elementos de um array, exceto o primeiro e o último.
// Caso o array tenha um tamanho menor que 3 imprima a mensagem: 'Tamanho do array inválido'
function ignoreFirstAndLastElement(array) {
  console.log("desafio 3")
  for(let i = 1; i < array.length-1; i++){
    console.log(array[i])
  }
}
ignoreFirstAndLastElement(array)

// Desafio 4
// Escreva um código que inverta a ordem dos elementos de um array.
function invertElementsArray(array) {
  console.log("desafio 4")
  invertArray = array.reverse()
  invertArray.forEach(element => {
    console.log(element)
  });
}
invertElementsArray(array)

// Desafio 5
//  Escreva um código que recebe uma string por parâmetro e imprima a sua versão invertida.
function invertString(string) {
  console.log("desafio 5")
  console.log(string.split("").reverse().join(""))
}
invertString("array")

// Desafio 6
// Escreva um código que receba um array de números por parâmetro e retorne
// o array com os elementos duplicados removidos.
function noDuplicates(array) {
  console.log("desafio 6")
  newArray = []
  array.forEach(element =>{
    if(!newArray.includes(element)){
      newArray.push(element)
    }
  })
  newArray.forEach(element => {
    console.log(element)
  })
}
noDuplicates(array2)

module.exports = {
  biggerNumber,
  printElements,
  ignoreFirstAndLastElement,
  invertElementsArray,
  invertString,
  noDuplicates
}
