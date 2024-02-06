// Desafio 8

const telNumber = [1, 2, 1, 2, 5, 6, 7, 8, 9, 0, 8]


function formatPhoneNumber(telNumber) {
    if (telNumber.length !== 11) {
        return 'Array com tamanho incorreto.'; 
    }

    let numeroOcorrencias = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    for (let index = 0; index < telNumber.length; index++) {

        if (telNumber[index] < 0 || telNumber[index] > 9) {
            return 'não é possível gerar um número de telefone com esses valores';
        }
        
        numeroOcorrencias[telNumber[index]]++;

        if (numeroOcorrencias[telNumber[index]] >= 3) {
            return 'não é possível gerar um número de telefone com esses valores';
        }
    }
    return `(${telNumber.slice(0, 2).join('')}) ${telNumber.slice(2, 7).join('')}-${telNumber.slice(7).join('')}`; 
}


module.exports = {
    formatPhoneNumber
}