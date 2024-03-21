// Desafio 8
const telNumber = [7, 1, 9, 8, 8, 0, 8 , 2, 5, 3, 1]

function formatPhoneNumber(telNumber) {
    return console.log(` (${telNumber[0]}${telNumber[1]}) ${telNumber[2]}${telNumber[3]}${telNumber[4]}${telNumber[5]}${telNumber[6]}-${telNumber[7]}${telNumber[8]}${telNumber[9]}${telNumber
        [10]}`)
}
console.log(formatPhoneNumber(telNumber))

module.exports = {
    formatPhoneNumber
}