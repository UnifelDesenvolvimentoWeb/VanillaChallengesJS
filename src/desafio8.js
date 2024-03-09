// Desafio 8

function formatPhoneNumber(telNumber) {
  if (telNumber.length !== 11) {
    return "Array com tamanho incorreto.";
  }

  const invalidNumbers = telNumber.filter((num) => {
    return num < 0 || num > 9;
  });

  if (invalidNumbers.length >= 1) {
    return "não é possível gerar um número de telefone com esses valores";
  }

  const invalidNumbersIguais = telNumber.reduce((acumulador, num) => {
    acumulador[num] = (acumulador[num] || 0) + 1;
    return acumulador;
  }, {});

  for (let key in invalidNumbersIguais) {
    if (invalidNumbersIguais[key] >= 3) {
      return "não é possível gerar um número de telefone com esses valores";
    }
  }

  const phone = `(${telNumber.slice(0, 2).join("")}) ${telNumber
    .slice(2, 7)
    .join("")}-${telNumber.slice(7).join("")}`;
  return phone;
}

module.exports = {
  formatPhoneNumber,
};
