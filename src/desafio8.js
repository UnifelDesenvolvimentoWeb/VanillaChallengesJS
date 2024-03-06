// Desafio 8
function formatPhoneNumber(telNumber) {
    if (telNumber.length !== 11) {
      return 'Array com tamanho incorreto.';     
    }
    const numCount = {}
    for(let num of telNumber){
       if(num < 0 || num > 9){
          return 'não é possível gerar um número de telefone com esses valores';
       }
       numCount[num] = (numCount[num] || 0) + 1;
       if(numCount[num] >= 3){
          return 'não é possível gerar um número de telefone com esses valores';
       }
    }
    const formattedNumber = `(${telNumber.slice(0, 2).join('')}) ${telNumber.slice(2, 7).join('')}-${telNumber.slice(7).join('')}`;
    return formattedNumber;
}
console.log(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));
console.log(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); 
console.log(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])); 
console.log(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 2, 2, 2])); 
module.exports = {
    formatPhoneNumber
}