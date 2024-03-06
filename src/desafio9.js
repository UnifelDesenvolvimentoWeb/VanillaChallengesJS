// Desafio 9
function getArrayNoIntervalo(array, inicio, fim) {
  let arrayNoIntervalo = [];
  arrayNoIntervalo = array.filter(num => num >= inicio && num <= fim);
  let contador = arrayNoIntervalo.length;

  return {arrayNoIntervalo, contador};
}

console.log(getArrayNoIntervalo([1, 2, 3, 4, 5, 1], 2, 4));
console.log(getArrayNoIntervalo([20, 14, 5, 6, 9, 63, 80, 120], 20, 80));
console.log(getArrayNoIntervalo([15, 4, 6, 9, 21, 30, 7], 15, 30));

module.exports = {
 getArrayNoIntervalo
}
