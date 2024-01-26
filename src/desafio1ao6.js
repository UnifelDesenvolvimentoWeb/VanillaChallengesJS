const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Desafio 1
// Escreva um código que imprima um por um de todos os elementos de um array.
function printsElements(array) {
  for(let index = 0; index < array.length; index++) {
    console.log(array[index])
  }
}
printsElements(array);

// Desafio 2
// Escreva um código que encontre o maior elemento de um array.
function biggerNumber(array) {
  let maiorNum = array[0]; 
  for (let index = 1; index < array.length; index ++) {
     if (array[index] > maiorNum) {
       maiorNum = array[index];
     }
  }
  console.log(`O maior elemento do array é: ${maiorNum}`);
  return maiorNum; 
 }
 biggerNumber(array)

// Desafio 3
// Escreva um código que imprima todos os elementos de um array, exceto o primeiro e o último.
// Caso o array tenha um tamanho menor que 3 imprima a mensagem: 'Tamanho do array inválido'
function ignoreFirstAndLastElement(array) {
  if (array.length < 3) {
     console.log('Tamanho do array inválido');
  } else {
     array.shift();
     array.pop();
     array.forEach(element => console.log(element));
  }
 }
 ignoreFirstAndLastElement(array);
 
// Desafio 4
// Escreva um código que inverta a ordem dos elementos de um array.
function invertElementsArray(array) {
  return [...array].reverse();
}
console.log(array);
invertElementsArray(array);

// Desafio 5
//  Escreva um código que recebe uma string por parâmetro e imprima a sua versão invertida.
function invertString(string) {
  const stringInvertida = string.split('').reverse().join('');
  console.log(`String invertida: ${stringInvertida}`);
  return stringInvertida;
 }
 const minhaString = 'Dias';
 invertString(minhaString);

// Desafio 6
// Escreva um código que receba um array de números por parâmetro e retorne
// o array com os elementos duplicados removidos.
const arrayDuplicado = [1, 1, 2, 3, 4, 4]
function noDuplicates(array) {
  const setUnico = new Set(array);
  const unicoArray = Array.from(setUnico);
  return unicoArray;
}
const resultArray = noDuplicates(arrayDuplicado);
console.log(`Array com os elementos duplicados removidos:`, resultArray);

noDuplicates(array)
module.exports = {
  biggerNumber,
  printsElements,
  ignoreFirstAndLastElement,
  invertElementsArray,
  invertString,
  noDuplicates
}
