// Desafio 8
const telNumber = [0, 7, 1, 9, 9, 1, 5, 0, 4, 8, 3, 4]
function formatPhoneNumber(telNumber) {
    let cel = telNumber.join("")
    if ( cel.length <= 11) {
        console.log('Array com tamanho incorreto.')
    } else if (telNumber.some(it => it < 0)) {
        console.log('não é possível gerar um número de telefone com esses valores')
    } else if (telNumber.some(it => it > 10)) {
        console.log('não é possível gerar um número de telefone com esses valores')
    } else {
        console.log(cel)
    }
    
}
formatPhoneNumber(telNumber)
module.exports = {
    formatPhoneNumber
}