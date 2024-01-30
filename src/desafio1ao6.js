
const array = [1,2,3];
// Desafio 1
// Escreva um código que imprima um por um de todos os elementos de um array.
function printsElements(array) {
  for(let i = 0; i < array.length; i++){
    console.log(array[i])
  }
}

// Desafio 2
// Escreva um código que encontre o maior elemento de um array.
function biggerNumber(array) {
  let maior = 0
  for(let i = 0; i < array.length; i++){
    if (array[i] > maior){
      maior = i
    } 
  }
  return array[maior]
}

// Desafio 3
// Escreva um código que imprima todos os elementos de um array, exceto o primeiro e o último.
// Caso o array tenha um tamanho menor que 3 imprima a mensagem: 'Tamanho do array inválido'
function ignoreFirstAndLastElement(array) {
  if(array.length < 3){
    console.log('Tamanho do array inválido');
  }
  for(let i = 1; i <= array.length-2; i++){
    console.log(array[i])
  }
  return
}

// Desafio 4
// Escreva um código que inverta a ordem dos elementos de um array.
function invertElementsArray(array) {
  arrayInverted = []
  for(let i = array.length-1; i > -1; i--){
    arrayInverted.push(array[i])
  }
  return arrayInverted
}

// Desafio 5
//  Escreva um código que recebe uma string por parâmetro e imprima a sua versão invertida.
function invertString(string) {
  stringInverted = ''
  for(let i = string.length-1; i > -1; i--){
    stringInverted += `${string[i]}`
  }
  const result = stringInverted
  return result
}

// Desafio 6
// Escreva um código que receba um array de números por parâmetro e retorne
// o array com os elementos duplicados removidos.
function noDuplicates(array) {
  const contem = (num ,array) => {
    let aux = false
    for(i = 0; i < array.length; i++){
      if(num == array[i]){
        aux = true
      }
    }
    return aux
  }
  let newArray = []
  for (let i = 0; i < array.length; i++) {
    if(!contem(array[i], newArray)){
      newArray.push(array[i])
    }
  }
  return newArray
}

module.exports = {
  biggerNumber,
  printsElements,
  ignoreFirstAndLastElement,
  invertElementsArray,
  invertString,
  noDuplicates
}
