// Desafio 8
function formatPhoneNumber(telNumber) {
    let telNumber2 = []
    if(telNumber.length != 11) {
        return 'Array com tamanho incorreto.'
    }
    
    for( let i = 0; i < telNumber.length; i += 1){
        if (telNumber[i] < 0) {
            return "não é possível gerar um número de telefone com esses valores"
        } else if (telNumber[i] >9) {
            return "não é possível gerar um número de telefone com esses valores"
        }
        telNumber2.push(telNumber[i])
    }
    
    const ordernado = telNumber
    ordernado.sort()
    let numero = null;
    let contador = 0;

    for(let i = 0; i <telNumber.length; i += 1){
        if (numero === ordernado[i]) {
            contador += 1
        
        if (contador === 3) {
            return ("não é possível gerar um número de telefone com esses valores")
        } 
        }else {
            contador = 1;
            numero = ordernado[i];
        }
    }
    return `(${telNumber2[0]}${telNumber2[1]}) ${telNumber2[2]}${telNumber2[3]}${telNumber2[4]}${telNumber2[5]}${telNumber2[6]}-${telNumber2[7]}${telNumber2[8]}${telNumber2[9]}${telNumber2[10]}`    
}

module.exports = {
    formatPhoneNumber
}