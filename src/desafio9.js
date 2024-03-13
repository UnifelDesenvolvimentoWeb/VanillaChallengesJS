// Desafio 9
function getArrayNoIntervalo(array, inicio, fim) {
  const arrayNoIntervalo = array.filter(num => num >= inicio && num <= fim);
  const contador = arrayNoIntervalo.length;
  return { arrayNoIntervalo, contador };
}

// Testes
console.log(getArrayNoIntervalo([1, 2, 3, 4, 5, 1], 2, 4)); // Saída: { arrayNoIntervalo: [2, 3, 4], contador: 3 }
console.log(getArrayNoIntervalo([20, 14, 5, 6, 9, 63, 80, 120], 20, 80)); // Saída: { arrayNoIntervalo: [20, 63, 80], contador: 3 }
console.log(getArrayNoIntervalo([15, 4, 6, 9, 21, 30, 7], 15, 30)); // Saída: { arrayNoIntervalo: [15, 21, 30], contador: 3 }

module.exports = {
  getArrayNoIntervalo
}

  