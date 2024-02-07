const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(`--------------------------------`);
// Desafio 1
// Escreva um código que imprima um por um de todos os elementos de um array.
function printElements(array) {
  for (let index = 0; index <= array.length; index += 1) {
    console.log(`numero de repetição: ${array[index]}`);
  }
}


console.log(printElements(array));


console.log(`--------------------------------`);
// Desafio 2
// Escreva um código que encontre o maior elemento de um array.
function biggerNumber(array) {
  var maiornumero = 0;
  for (i = 0; i < array.length; i++) {
    var numero = array[i];
    if (numero > maiornumero) {
      maiornumero = numero;

    }

  }
  return (`o maior número encontrado na array é: ${maiornumero}`)
}
console.log(biggerNumber(array));

console.log(`--------------------------------`);
// Desafio 3
// Escreva um código que imprima todos os elementos de um array, exceto o primeiro e o último.
// Caso o array tenha um tamanho menor que 3 imprima a mensagem: 'Tamanho do array inválido'
function ignoreFirstAndLastElement(array) {

  if (array.length > 3) {
    // comentei pois o desafio 4 estava vindo sem o primeiro elemento e o ultimo elemento.
    array.pop();
    array.shift();
    console.log(array);
  } else {

    console.log('tamanho de array invalido')
  }
}
console.log(ignoreFirstAndLastElement(array));
console.log(`--------------------------------`);

// Desafio 4
// comentei pois o desafio 4 estava vindo sem o primeiro elemento e o ultimo elemento.
// Escreva um código que inverta a ordem dos elementos de um array.
function invertElementsArray(array) {

  var teste = array.reverse();
  return (`Array invertido ${teste}`);
}


console.log(invertElementsArray(array));
console.log(`--------------------------------`);

// Desafio 5
//  Escreva um código que recebe uma string por parâmetro e imprima a sua versão invertida.
function invertString(string) {

  let nome = '';

  for (let i = string.length - 1; i >= 0; i--) {
    nome += string[i];

  }
  return nome;
}
console.log(invertString('string por parametros'));


console.log(`--------------------------------`);
// Desafio 6
// Escreva um código que receba um array de números por parâmetro e retorne 
// o array com os elementos duplicados removidos.
function noDuplicates(array) {

  var tv = [];
  for (let i = 0; i < array.length; i++) {
    if (tv.indexOf(array[i]) === -1) {
      tv.push(array[i]);

    }
  }
  return `O array sem os duplicados é ${tv}`;
}

var arr = [1, 2, 2, 3, 4, 5, 6, 7 ,7 , 8, 8, 9, 10];
var final = noDuplicates(arr);
console.log(final);


module.exports = {
  biggerNumber,
  printElements,
  ignoreFirstAndLastElement,
  invertElementsArray,
  invertString,
  noDuplicates
}
