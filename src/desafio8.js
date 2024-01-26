// Desafio 8

function formatPhoneNumber(telNumber) {
  if (telNumber.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  for (let index = 0; index < telNumber.length; index++) {
    if (telNumber[index] < 0 || telNumber[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }

    const count = telNumber.filter(num => num === telNumber[index]).length;
    if (count >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  const formattedNumber = `(${telNumber.slice(0, 2).join('')}) ${telNumber.slice(2, 7).join('')}-${telNumber.slice(7).join('')}`;
  return formattedNumber;
}
console.log(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));
module.exports = {
    formatPhoneNumber
};
