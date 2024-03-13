const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Desafio 1
// Escreva um código que imprima um por um de todos os elementos de um array.
function printElements(array) {
  // Itera sobre cada elemento do array e imprime na tela
  for (let i = 0; i < array.length; i+= 1) {
      console.log(array[i]);
  }
}

// Chamando a função para imprimir os elementos do array
printElements(array);

// Desafio 2
// Escreva um código que encontre o maior elemento de um array.
function biggerNumber(array) {
  return Math.max(...array);
}

// Exemplo de uso
console.log("O maior elemento do array é:", biggerNumber(array));

// Desafio 3
// Escreva um código que imprima todos os elementos de um array, exceto o primeiro e o último.
// Caso o array tenha um tamanho menor que 3 imprima a mensagem: 'Tamanho do array inválido'
function ignoreFirstAndLastElement(array) {
  // Verifica se o tamanho do array é menor que 3
  if (array.length < 3) {
      console.log("Tamanho do array inválido");
      return;
  }

  // Itera sobre os elementos do array a partir do segundo elemento até o penúltimo
  for (let i = 1; i < array.length - 1; i+= 1) {
      console.log(array[i]);
  }
}

// Exemplo de uso
ignoreFirstAndLastElement(array);


// Desafio 4
// Escreva um código que inverta a ordem dos elementos de um array.
function invertElementsArray(array) {
  return array.reverse();
}

console.log(invertElementsArray(array)); // Output: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]


// Desafio 5
//  Escreva um código que recebe uma string por parâmetro e imprima a sua versão invertida.
function invertString(string) {
  // Divide a string em um array de caracteres, inverte a ordem dos caracteres e, em seguida, junta-os novamente em uma string
  return string.split('').reverse().join('');
}

const inputString = "Hello, World!";
console.log(invertString(inputString)); // Output: "!dlroW ,olleH"


// Desafio 6
// Escreva um código que receba um array de números por parâmetro e retorne
// o array com os elementos duplicados removidos.
function noDuplicates(array) {
  // Filtra o array mantendo apenas o primeiro ocorrencia de cada elemento
  return array.filter((element, index) => array.indexOf(element) === index);
}

const inputArray = [1, 2, 2, 3, 4, 4, 5];
console.log(noDuplicates(inputArray)); // Output: [1, 2, 3, 4, 5]


module.exports = {
  biggerNumber,
  printElements,
  ignoreFirstAndLastElement,
  invertElementsArray,
  invertString,
  noDuplicates
}
