// Desafio 9
function getArrayNoIntervalo(array, inicio, fim) {
  const indexInicio = array.indexOf(inicio);
  const indexFim = array.indexOf(fim);
  const intervalo = array.slice(indexInicio, indexFim + 1);
  return {
    arrayNoIntervalo: intervalo,
    contador: intervalo.length,
  };
}

module.exports = {
  getArrayNoIntervalo,
};
