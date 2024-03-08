// Desafio 8
function formatPhoneNumber(telNumber) {

    if(telNumber.length !== 11) {
        return "Array com tamanho incorreto.";
    }

    let numCounter = {};
    let error = 'não é possível gerar um número de telefone com esses valores'

    for(let i = 0; i < 11; i++) {
        if(telNumber[i] < 0 || telNumber[i] > 9) {
            return error;
        }

        if(numCounter[telNumber[i]] === undefined) {
            numCounter[telNumber[i]] = 1;
        }
        else {
            numCounter[telNumber[i]] += 1;
        }

    }

    numCounter = Object.values(numCounter);
    
    for(let i = 0; i < numCounter.length; i++) {
        if(numCounter[i] >= 3) {return error}
    }
    
    return `(${telNumber[0]}${telNumber[1]}) ${telNumber.join('').slice(2,7)}-${telNumber.join('').slice(7)}`
}
module.exports = {
    formatPhoneNumber
}