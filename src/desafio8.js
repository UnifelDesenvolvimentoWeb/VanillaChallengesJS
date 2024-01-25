// Desafio 8

function formatPhoneNumber(telNumber) {
    let telNum = []
    if(telNumber.length != 11) {
        return 'Array com tamanho incorreto.'
    }
    for( let index = 0; index < telNumber.length; index += 1) {
        if (telNumber[index] < 0) {
            return "não é possível gerar um número de telefone com esses valores"
        } else if (telNumber[index] >9) {
            return "não é possível gerar um número de telefone com esses valores"
        }
        telNum.push(telNumber[index])
    }

    const order = telNumber
    order.sort()
    let num = null;
    let cont = 0;

    for (let index = 0; index <telNumber.length; index += 1) {
        if (num === order[index]) {
            cont += 1

        if (cont === 3) {
            return ("não é possível gerar um número de telefone com esses valores")
        } 
        } else {
            cont = 1;
            num = order[index];
        }
    }
    return `(${telNum[0]}${telNum[1]}) ${telNum[2]}${telNum[3]}${telNum[4]}${telNum[5]}${telNum[6]}-${telNum[7]}${telNum[8]}${telNum[9]}${telNum[10]}`
    
}

module.exports = {
    formatPhoneNumber
}