// Desafio 1
// Escreva um código que imprima um por um de todos os elementos de um array.

const array1 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
function printElements ( array1 )
{
  for ( let index = 0; index < array1.length; index++ )
  {
    console.log( array1[ index ] );
  }
}

printElements( array1 );

// Desafio 2
// Escreva um código que encontre o maior elemento de um array.

const array2 = [ 6, 28, 13, 44, 25, 16, 72, 38, 9, 10 ];
function biggerNumber ( array2 )
{
  let max = array2[ 0 ];
  for ( let index = 1; index < array2.length; index++ )
  {
    if ( array2[ index ] > max )
    {
      max = array2[ index ];
    }
  }
  return max;
}

console.log( biggerNumber( array2 ) );

// Desafio 3
// Escreva um código que imprima todos os elementos de um array, exceto o primeiro e o último.
// Caso o array tenha um tamanho menor que 3 imprima a mensagem: 'Tamanho do array inválido'

const array3 = [ 6, 28, 13, 44, 25, 16, 72, 38, 9, 10 ];
// const array3 = [4, 10]; // teste do array com menos de 3 elementos.

function ignoreFirstAndLastElement ( array3 )
{
  if ( array3.length < 3 )
  {
    console.log( 'Tamanho do array inválido' );
  } else
  {
    for ( let index = 1; index < array3.length - 1; index++ )
    {
      console.log( array3[ index ] );
    }
  }
}

ignoreFirstAndLastElement( array3 );

// Desafio 4
// Escreva um código que inverta a ordem dos elementos de um array.
function invertElementsArray ( array )
{
  const length = array.length;

  // Teste do array vazio
  if ( length === 0 )
  {
    return [];
  }

  // Teste do array com um único elemento
  if ( length === 1 )
  {
    return array.slice(); // Testando método novo para retornar uma cópia do array original "https://www.w3schools.com/js/js_array_methods.asp#mark_slice"
  }

  // Inverte a ordem dos elementos do array
  const invertedArray = [];
  for ( let index = length - 1; index >= 0; index-- )
  {
    invertedArray.push( array[ index ] );
  }

  return invertedArray;
}

const array = [ 6, 28, 4, 10, 13, 15, 23, 52, 14, 9 ];

// Testa a função
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
