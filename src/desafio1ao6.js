const array = [1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 10];


// Desafio 1
// Escreva um código que imprima um por um de todos os elementos de um array.

function printsElements(array) {
  for (let index = 0; index < array.length; index += 1) {
    console.log(array[index])
  } 
}

// Desafio 2
// Escreva um código que encontre o maior elemento de um array.

function biggerNumber(array) {
  let maxValue = array[0]

  for(let index = 1; index <array.length; index += 1) {
    if(array[index] > maxValue) {
      maxValue = array[index];
    }
  }
  return maxValue 
}


// Desafio 3
// Escreva um código que imprima todos os elementos de um array, exceto o primeiro e o último.
// Caso o array tenha um tamanho menor que 3 imprima a mensagem: 'Tamanho do array inválido'

function ignoreFirstAndLastElement(array) {
  if(array.length >= 3) {
    for (let index = 1; index < (array.length - 1); index += 1) {
      console.log(array[index])
    } 
  } else {
    console.log('Tamanho do array inválido')
  }
}


// Desafio 4
// Escreva um código que inverta a ordem dos elementos de um array.

function invertElementsArray(array) {
  let novoArr = [];

  for (let index = (array.length - 1); index >= 0; index -= 1) {
    novoArr.push(array[index])
  }
  return novoArr
}

// Desafio 5
//  Escreva um código que recebe uma string por parâmetro e imprima a sua versão invertida.

function invertString(string) {
  let nameInverter = '';
  for (let index = (string.length - 1); index >= 0; index -= 1) {
    nameInverter += string[index]
}
  return nameInverter 
}


// Desafio 6
// Escreva um código que receba um array de números por parâmetro e retorne
// o array com os elementos duplicados removidos.

function noDuplicates(array) {
  const dupArray = [array[0]];
  if (array.length === 0) {
    return (array);
  } else {
    for(let index = 1; index < array.length; index += 1) {
      if(!dupArray.includes(array[index])){
        dupArray.push(array[index])
      }
  }
  return (dupArray);
  } 
}


module.exports = {
  biggerNumber,
  printsElements,
  ignoreFirstAndLastElement,
  invertElementsArray,
  invertString,
  noDuplicates
}