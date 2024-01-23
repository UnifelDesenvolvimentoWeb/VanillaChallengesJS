// Desafio 1
// Escreva um código que imprima um por um de todos os elementos de um array.

const array = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
function printElements ( array )
{
  for ( let index = 0; index < array.length; index++ )
  {
    console.log( array[ index ] );
  }
}

printElements( array );

// Desafio 2
// Escreva um código que encontre o maior elemento de um array.

const array = [ 6, 28, 13, 44, 25, 16, 72, 38, 9, 10 ];
function biggerNumber ( array )
{
  let max = array[ 0 ];
  for ( let index = 1; index < array.length; index++ )
  {
    if ( array[ index ] > max )
    {
      max = array[ index ];
    }
  }
  return max;
}

console.log( biggerNumber( array ) );

// Desafio 3
// Escreva um código que imprima todos os elementos de um array, exceto o primeiro e o último.
// Caso o array tenha um tamanho menor que 3 imprima a mensagem: 'Tamanho do array inválido'

const array = [ 6, 28, 13, 44, 25, 16, 72, 38, 9, 10 ];
// const array = [4, 10]; // teste do array com menos de 3 elementos.
function ignoreFirstAndLastElement ( array )
{
  if ( array.length < 3 )
  {
    console.log( 'Tamanho do array inválido.' );
    return;
  }
  for ( let index = 1; index < array.length - 1; index++ )
  {
    console.log( array[ index ] );
  }
}

ignoreFirstAndLastElement( array );

// Desafio 4
// Escreva um código que inverta a ordem dos elementos de um array.

const array = [ 6, 28, 4, 10, 13, 15, 23, 52, 14, 9 ];
function invertElementsArray ( array )
{
  let arrayInvertido = array.reverse();
  return arrayInvertido;
}

console.log( invertElementsArray( array ) );

// Desafio 5
//  Escreva um código que recebe uma string por parâmetro e imprima a sua versão invertida.
function invertString ( string )
{
  let invertidaString = string.split( '' ).reverse().join( '' );
  return invertidaString;
}

console.log( invertString( "Curso de Front-End da UNIFEL" ) );

// Desafio 6
// Escreva um código que receba um array de números por parâmetro e retorne
// o array com os elementos duplicados removidos.
function noDuplicates ( array )
{
  let semdupliArray = [ ...new Set( array ) ];
  return semdupliArray;
}

console.log( noDuplicates( [ 1, 1, 2, 3, 4, 4, 5, 5, 6, 7, 7, 8, 8, 9, 10, 10 ] ) );

module.exports = {
  biggerNumber,
  printElements,
  ignoreFirstAndLastElement,
  invertElementsArray,
  invertString,
  noDuplicates
}
