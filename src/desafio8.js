// Desafio 8
function formatPhoneNumber(telNumber) {
    if(telNumber.length !==11) {
        return 'Array com tamanho incorreto.';
    }

    const nNumber = {};
    for(let i = 0; i < telNumber.length; i++) {
        const numero = telNumber[i];
        if(numero < 0 || numero > 9) {
            return 'não é possível gerar um número de telefone com esses valores';
        }
        nNumber[numero] = (nNumber[numero] || 0) + 1;
        if(nNumber[numero] >= 3) {
            return 'não é possível gerar um número de telefone com esses valores';
            } 
    }
    const stringNumber = `(${telNumber[0]}${telNumber[1]}) ${telNumber[2]}${telNumber[3]}${telNumber[4]}${telNumber[5]}${telNumber[6]}-${telNumber[7]}${telNumber[8]}${telNumber[9]}${telNumber[10]}`;
    return stringNumber

}
module.exports = {
    formatPhoneNumber
}