// Desafio 8
function formatPhoneNumber(telNumber) {
 if (telNumber.length !== 11) {
   return 'Array com tamanho incorreto.';
 }
 let contadorOcorrencias =[0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
 for (let i = 0; i < telNumber.length; i++) {
    
    if (telNumber[i] < 0 || telNumber[i] > 9) {
        return 'não é possível gerar um número de telefone com esses valores';
    }
    contadorOcorrencias[telNumber[i]]++;
    if (contadorOcorrencias[telNumber[i]] >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
 }
 
//  for (num of contadorOcorrencias) {
//   if (num >= 3) {
//     return 'não é possível gerar um número de telefone com esses valores';
//   }
//  }                                 

return `(${telNumber.slice(0, 2).join('')}) ${telNumber.slice(2, 7).join('')}-${telNumber.slice(7).join('')}`;
}


module.exports = {
    formatPhoneNumber
}