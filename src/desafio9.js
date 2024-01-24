// Desafio 9
function getArrayNoIntervalo(array, inicio, fim) {
  return array.slice(inicio, fim)
   
}
console.log(getArrayNoIntervalo([1, 2, 3, 4, 5, 1], 1, 4))
module.exports = {
  getArrayNoIntervalo
}

  