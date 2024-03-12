// Desafio 9
function getArrayNoIntervalo(array, inicio, fim) {
  let resultado = {arrayNoIntervalo: [], contador: 0}
  array.forEach((element) => (element >= inicio && element <= fim) ? (resultado.arrayNoIntervalo.push(element), resultado.contador += 1) : null)
  return resultado
}

module.exports = {
  getArrayNoIntervalo
}

  