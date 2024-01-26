const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const teste = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const teste2 = [10, 20]

// Desafio 1
// Escreva um código que imprima um por um de todos os elementos de um array.
function printElements(array) {
	for(let i = 0; i<array.length; i++){
		console.log(array[i]);
		}
	}
	printElements(array);

// Desafio 2
// Escreva um código que encontre o maior elemento de um array.

let maiorNumero = 0;
function biggerNumber(array) {
	for(let i = 0; i<array.length ; i++){
		if (maiorNumero < array[i]) {
			maiorNumero = array[i]			
		}		
	}	
}
biggerNumber(teste)
console.log(maiorNumero)


// Desafio 3
// Escreva um código que imprima todos os elementos de um array, exceto o primeiro e o último.
// Caso o array tenha um tamanho menor que 3 imprima a mensagem: 'Tamanho do array inválido'
function ignoreFirstAndLastElement(array) {
	for(let i=0; i<array.length; i++) {
		if(i > 0 && i < array.length-1) {
			console.log(array[i])
		}else if(array.length < 3 && i > 0) {
			console.log("Tamnho do array inválido")
		}
	}		
}
ignoreFirstAndLastElement(teste)
console.log("========================")
ignoreFirstAndLastElement(teste2)	

// Desafio 4
// Escreva um código que inverta a ordem dos elementos de um array.
function invertElementsArray(array) {
	for(let i = array.length-1; i>=0 ; i--){
		console.log(array[i])		
	}
}
invertElementsArray(array)

// Desafio 5
//  Escreva um código que recebe uma string por parâmetro e imprima a sua versão invertida.
const frutas =["Abacate", "Cajú", "Manga", "Acerola", "Melância"] 
function invertString(string) {
	for(let i=string.length-1; i>=0;  i--){
		console.log(string[i])
	}
}
invertString(frutas)

// Desafio 6
// Escreva um código que receba um array de números por parâmetro e retorne
// o array com os elementos duplicados removidos.
function noDuplicates(array) {
  
}

console.log("Testando o Git")

module.exports = {
  biggerNumber,
  printElements,
  ignoreFirstAndLastElement,
  invertElementsArray,
  invertString,
  noDuplicates
}
