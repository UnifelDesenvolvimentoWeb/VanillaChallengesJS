// Desafio 8
function formatPhoneNumber(telNumber) {
    
if(telNumber.length !==11) {
    return 'Array com tamanho incorreto.';
}

const contadorNumeros = {};
for(let i = 0; i < telNumber.length; i++) {
    const numero = telNumber[i];
    if(numero < 0 || numero > 9) {
        return 'não é possível gerar um número de telefone com esses valores';
    }
    contadorNumeros[numero] = (contadorNumeros[numero] || 0) + 1;
    if(contadorNumeros[numero] >= 3) {
        return 'não é possível gerar um número de telefone com esses valores';
        } 
}
const formatoNumero = `(${telNumber[0]}${telNumber[1]}) ${telNumber[2]}${telNumber[3]}${telNumber[4]}${telNumber[5]}${telNumber[6]}-${telNumber[7]}${telNumber[8]}${telNumber[9]}${telNumber[10]}`;
return formatoNumero
}

module.exports = {
    formatPhoneNumber
}