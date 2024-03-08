const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Desafio 1
// Escreva um código que imprima um por um de todos os elementos de um array.

function printElements() {

  for (i = 0; i < array.length; i++) {
      console.log(array[i]);
    } 

}

// Também dá para usar o método forEach()

console.log(printElements());


// Desafio 2
// Escreva um código que encontre o maior elemento de um array.

function biggerNumber() {

  return Math.max.apply(null,array);

}

console.log(biggerNumber());


// Desafio 3
// Escreva um código que imprima todos os elementos de um array, exceto o primeiro e o último.
// Caso o array tenha um tamanho menor que 3 imprima a mensagem: 'Tamanho do array inválido'

function ignoreFirstAndLastElement() {

    let ignoraprimeiroelemento = array.shift();
    let ignoraultimoelemento = array.pop();
    
    console.log(ignoraprimeiroelemento);
    console.log(ignoraultimoelemento);
    console.log(array);
    
}
  
console.log(ignoreFirstAndLastElement());


// Desafio 4
// Escreva um código que inverta a ordem dos elementos de um array.

function invertElementsArray() {

    let reverteelementoarray = array.reverse();

    console.log(reverteelementoarray);

}

console.log(invertElementsArray());


//  Desafio 5
//  Escreva um código que recebe uma string por parâmetro e imprima a sua versão invertida.

function invertString() {

  const palavra = 'Paralelepipedo';

  let transformaStringEmArray = palavra.split("");
  let reverteString = transformaStringEmArray.reverse();
  let juntaPalavraRevertida = reverteString.join("");

  return juntaPalavraRevertida;

}

console.log(invertString());


// Desafio 6
// Escreva um código que receba um array de números por parâmetro e retorne
// o array com os elementos duplicados removidos.

const array2 = [1, 2, 3, 3, 4, 5, 6, 6, 7, 8, 9, 10];

function noDuplicates() {
  
    const naoDuplicados = new Set();

    array2.forEach((numeros) => {

        naoDuplicados.add(numeros);
        
    } );

    console.log([...naoDuplicados.values()]);

}

console.log(noDuplicates(array2));

module.exports = {
  biggerNumber,
  printElements,
  ignoreFirstAndLastElement,
  invertElementsArray,
  invertString,
  noDuplicates
}
