const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Desafio 1
// Escreva um código que imprima um por um de todos os elementos de um array.
function printsElements(array) {
  for (index = 0; index <= array.length - 1; index += 1){
    console.log(array[index]);
  }
}

// Desafio 2
// Escreva um código que encontre o maior elemento de um array.
function biggerNumber(array) {
  let compare = array[0];
  for(index = 1; index < array.length; index++){
    if(compare < array[index]){
        compare = array[index];
    }
    else if (compare>array[index]){
        compare = compare;
    }
    else {
        console.log(`Undefined`);
    }
  }
  return compare;
}

// Desafio 3
// Escreva um código que imprima todos os elementos de um array, exceto o primeiro e o último.
// Caso o array tenha um tamanho menor que 3 imprima a mensagem: 'Tamanho do array inválido'
function ignoreFirstAndLastElement(array) {
  if (array.length < 3){
    console.log('Tamanho do array inválido');
    return;
  }
  for(index = 1; index < array.length -1; index += 1){
    console.log(array[index]);
  }
}
ignoreFirstAndLastElement(array);

// Desafio 4
// Escreva um código que inverta a ordem dos elementos de um array.
function invertElementsArray(array) {
  const invertedArray = array.slice().reverse();
  return invertedArray;
}

// Desafio 5
//  Escreva um código que recebe uma string por parâmetro e imprima a sua versão invertida.
function invertString(string) {
  const invertedString = string.split("").reverse().join("");
  return invertedString;
}
//invertString(string);

// Desafio 6
// Escreva um código que receba um array de números por parâmetro e retorne
// o array com os elementos duplicados removidos.
function noDuplicates(array) {
  const noDupes = new Set(array);
  const result = [...noDupes];

  return result;
}

module.exports = {
  biggerNumber,
  printsElements,
  ignoreFirstAndLastElement,
  invertElementsArray,
  invertString,
  noDuplicates
}
