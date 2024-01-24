const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Desafio 1
// Escreva um código que imprima um por um de todos os elementos de um array.
function printElements(numeros) {

    for (let index = 0; index < numeros.length; index++) {
        console.log(numeros[index]);
      }
}
const arrayDeNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
printElements(arrayDeNumeros)


// Desafio 2
// Escreva um código que encontre o maior elemento de um array.
function biggerNumber(array) {

if (array.length === 0) {
  return undefined;
}
var maiorNumero = array[0];
    
    for (let index = 1; index < array.length; index += 1) {
        if (array[index] > maiorNumero) {
            maiorNumero = array[index]
           } 
    }
        
return maiorNumero;
}
 
//const numbers = [-1, 2, -3, 4, -5];
//biggerNumber(numbers);


// Desafio 3
// Escreva um código que imprima todos os elementos de um array, exceto o primeiro e o último.
// Caso o array tenha um tamanho menor que 3 imprima a mensagem: 'Tamanho do array inválido'
function ignoreFirstAndLastElement(array) {

}

// Desafio 4
// Escreva um código que inverta a ordem dos elementos de um array.
function invertElementsArray(array) {

}

// Desafio 5
//  Escreva um código que recebe uma string por parâmetro e imprima a sua versão invertida.
function invertString(string) {

}

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
