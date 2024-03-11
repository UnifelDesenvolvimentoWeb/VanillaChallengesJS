// Desafio 9
function getArrayNoIntervalo(array, inicio, fim) {
  let resultado = {}
  let contador = 0
  let array2 = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] >= inicio && array[i] <= fim) {
      array2.push(array[i])
      contador += 1
    }
  }
  resultado.arrayNoIntervalo = array2
  resultado.contador = contador
  return resultado
}

module.exports = {
  getArrayNoIntervalo
}

  