// Desafio 8
function formatPhoneNumber(numbers) {

    if (!Array.isArray(numbers) || numbers.length !== 11) {
        return 'Array com tamanho incorreto.';
      }
    
      for (let index = 0; index < numbers.length; index += 1) {
        if (typeof numbers[index] !== 'number' || numbers[index] < 0 || numbers[index] > 9) {
          return 'não é possível gerar um número de telefone com esses valores';
        }
      }
    
      let contadorOcorrencias = {};
      for (let number of numbers) {
        contadorOcorrencias[number] = (contadorOcorrencias[number] || 0) + 1;
        if (contadorOcorrencias[number] >= 3) {
          return 'não é possível gerar um número de telefone com esses valores';
        }
      }
    
      const numeroFormatado = `(${numbers[0]}${numbers[1]}) ${numbers[2]}${numbers[3]}${numbers[4]}${numbers[5]}${numbers[6]}-${numbers[7]}${numbers[8]}${numbers[9]}${numbers[10]}`;
      return numeroFormatado;
}

module.exports = {
    formatPhoneNumber
}