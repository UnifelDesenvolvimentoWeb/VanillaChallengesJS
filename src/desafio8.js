// Desafio 8
function formatPhoneNumber(numero) {
    var M = [];
    for (var i = 0; i < numero.length; i++) {

        if (M.indexOf(numero[i] == -1)) {
            M.push(numero[i]);
            return (`${numero}  -> não é possível gerar um número de telefone com esses valores`)
        }


        if (numero[i] < 0) {
            return ('não é possível gerar um número de telefone com esses valores')
        }
        if (numero[i] > 9) {
            return ('não é possível gerar um número de telefone com esses valores')
        }


    }
    if (numero.length > 11) {
        return ('Array com tamanho incorreto')
    } else {
        return (`(${numero[0]}${numero[1]}) ${numero[2]}${numero[3]}${numero[4]}${numero[5]}-${numero[6]}${numero[7]}${numero[8]}${numero[9]}`);

    }




}
const nutel = [1, 2, 3, 3, 5, 6, 10, 8, 8, 9, 3];
console.log(formatPhoneNumber(nutel));

module.exports = {
    formatPhoneNumber
}