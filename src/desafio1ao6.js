// Desafio 1
// Escreva um código que imprima um por um de todos os elementos de um array.

  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
   for (let index = 0; index < array.length; index += 1 ) {
    console.log(array[index]);

   }
  
  // function printElements(array) 

  
// Desafio 2
// Escreva um código que encontre o maior elemento de um array.

const array1 = [1, 6, 8, 5, 19, 20, 10];

console.log(Math.max(...array1));

  // function biggerNumber(array) 



// Desafio 3
// Escreva um código que imprima todos os elementos de um array, exceto o primeiro e o último.
// Caso o array tenha um tamanho menor que 3 imprima a mensagem: 'Tamanho do array inválido'

const animals = ['cão', 'gato', 'vaca', 'peixe', 'girafa'];

console.log(animals.slice(2));

console.log(animals.slice(2, 4));

console.log(animals.slice(1, 5));

console.log(animals.slice(-2));

console.log(animals.slice(2, -1));

console.log(animals.slice());

// function ignoreFirstAndLastElement(array) {

// }

// Desafio 4
// Escreva um código que inverta a ordem dos elementos de um array.

let arr = [8,4,60,15]; 

let temp;

console.log("Array original: " + arr);

for (let i = 0; i < (arr.length - 1) / 2; i++) {
    temp = arr[i];
    arr[i] = arr[(arr.length - 1) - i];
    arr[(arr.length - 1) - i] = temp;

}

console.log("Array inverso: " + arr);


// function invertElementsArray(array) {

// }

// Desafio 5
//  Escreva um código que recebe uma string por parâmetro e imprima a sua versão invertida.

function invertString(string) {
  return string;
}
invertString("Hello");

// function invertString(string) {

// }

// Desafio 6
// Escreva um código que receba um array de números por parâmetro e retorne
// o array com os elementos duplicados removidos.

let arr = [1, 2, 1, 2, 3, 5, 4, 5, 3, 4, 4, 4, 4];
let result = arr.sort().reduce((init, current) => {
  if (init.length === 0 || init[init.length - 1] !== current) {
    init.push(current);
  }
  return init;
}, []);
console.log(result)


// function noDuplicates(array) {
  
// }

module.exports = {
  biggerNumber,
  printElements,
  ignoreFirstAndLastElement,
  invertElementsArray,
  invertString,
  noDuplicates
}
