// Desafio 9
function getArrayNoIntervalo(array, inicio, fim) {
  
  const arrayNoIntervalo = array.filter(num => num >= inicio && num <= fim);
  const contador = arrayNoIntervalo.length;

  return { arrayNoIntervalo, contador };   
}

module.exports = {
  getArrayNoIntervalo
}

  