// Desafio 8
function formatPhoneNumber(telNumber) {
    tamArray = telNumber.length
    let numeroFormatado = `(${telNumber[0]}${telNumber[1]}) ${telNumber[2]}${telNumber[3]}${telNumber[4]}${telNumber[5]}${telNumber[6]}-${telNumber[7]}${telNumber[8]}${telNumber[9]}${telNumber[10]}` 

    let validaNumeros = (telNumber) =>{
        for(i = 0; i < telNumber.length; i++){
            if(telNumber[i] < 0 || telNumber[i] > 9){
                return false
            } 
        }
        return true  
    }
    function repete(telNumber){
        for(let i = 0; i < telNumber.length; i++){
            resu = true
            if(verificaQuantidade(telNumber,telNumber[i]) >= 3){
                return true
            }
        }
        return false
        
    }
    function verificaQuantidade(array, numero) {
        let qnt = 0
        for(i = 0; i < array.length; i++){
            if(array[i] == numero){
                qnt += 1
            }
        }
        return qnt
    }


    if(tamArray != 11){
        return 'Array com tamanho incorreto.'
    }
    if(!validaNumeros(telNumber)|| repete(telNumber)){
        return 'não é possível gerar um número de telefone com esses valores'
    }
    else{
        return numeroFormatado
    }
}




module.exports = {
    formatPhoneNumber
}