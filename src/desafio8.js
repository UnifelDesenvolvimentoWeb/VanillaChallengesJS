// Desafio 8
function formatPhoneNumber(telNumber) {
    let resultFrequency = {}
    let resultMaior9Menor0 = 0
    let result
    const getFrequency = (array, value) => 
        array.reduce((acc, item) => value === item ? acc + 1 : acc, 0)
    
    if (telNumber.length !== 11) {
        return 'Array com tamanho incorreto.'
    } else {
        for (let i = 0; i < telNumber.length; i++) {
            resultFrequency[i] = getFrequency(telNumber, telNumber[i])
            if (telNumber[i] < 0 || telNumber[i] > 9) {
                resultMaior9Menor0 += 1
            }         
        }
        if (Object.values(resultFrequency).some(value => value >= 3) || resultMaior9Menor0 > 0) {
            return 'não é possível gerar um número de telefone com esses valores'
        } else {
            return `(${telNumber[0]}${telNumber[1]}) ${telNumber[2]}${telNumber[3]}${telNumber[4]}${telNumber[5]}${telNumber[6]}-${telNumber[7]}${telNumber[8]}${telNumber[9]}${telNumber[10]}`
        }
    }
}

module.exports = {
    formatPhoneNumber
}