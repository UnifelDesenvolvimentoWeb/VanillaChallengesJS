const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Desafio 1
// Escreva um código que imprima um por um de todos os elementos de um array.
function printElements(array) {
  array.map((element) => console.log(element));
}
// Escreva um código que encontre o maior elemento de um array.
function biggerNumber(array) {
  let bigNum = array[0];
  array.map((num) => {
    num > bigNum ? (bigNum = num) : bigNum;
  });
  return bigNum;
}

// Desafio 3
// Escreva um código que imprima todos os elementos de um array, exceto o primeiro e o último.
// Caso o array tenha um tamanho menor que 3 imprima a mensagem: 'Tamanho do array inválido'
function ignoreFirstAndLastElement(array) {
  if (array.length < 3) {
    console.log("Tamanho do array inválido");
    return;
  }
  array.pop();
  array.shift();
  array.map((element) => console.log(element));
}

// Desafio 4
// Escreva um código que inverta a ordem dos elementos de um array.
function invertElementsArray(array) {
  const arrayInvertido = array.slice().reverse();
  return arrayInvertido;
}

// Desafio 5
//  Escreva um código que recebe uma string por parâmetro e imprima a sua versão invertida.
function invertString(string) {
  const stringInvert = string.split("").slice().reverse().join("");
  return stringInvert;
}

// Desafio 6
// Escreva um código que receba um array de números por parâmetro e retorne
// o array com os elementos duplicados removidos.
function noDuplicates(array) {
  let arrayNoDuplicates = [];
  array.map((num) => {
    !arrayNoDuplicates.includes(num) ? arrayNoDuplicates.push(num) : false;
  });
  return arrayNoDuplicates;
}

module.exports = {
  biggerNumber,
  printElements,
  ignoreFirstAndLastElement,
  invertElementsArray,
  invertString,
  noDuplicates,
};
