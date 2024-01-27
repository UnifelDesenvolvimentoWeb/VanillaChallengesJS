// Desafio 8
function formatPhoneNumber(telNumber) {
    if(telNumber.length < 11){
        return `Array com tamanho incorreto.`;
    }
    else if(telNumber.length > 11){
        return `Array com tamanho incorreto.`;
    }
    for(index = 0; index < telNumber.length; index += 1){
        if(telNumber[index] < 0){
            return `não é possível gerar um número de telefone com esses valores`;
        }
        else if(telNumber[index] > 9){
            return `não é possível gerar um número de telefone com esses valores`;
        }
    }

    const numCount = {};
    for (const num of telNumber) {
        numCount[num] = (numCount[num] || 0) + 1;
        if (numCount[num] >= 3) {
            return `não é possível gerar um número de telefone com esses valores`;
        }
    }

    const formattedNumber = `(${telNumber[0]}${telNumber[1]}) ${telNumber[2]}${telNumber[3]}${telNumber[4]}${telNumber[5]}${telNumber[6]}-${telNumber[7]}${telNumber[8]}${telNumber[9]}${telNumber[10]}`;

    return formattedNumber;
}

module.exports = {
    formatPhoneNumber
}