// Desafio 9
function getArrayNoIntervalo ( array, inicio, fim )
{
  let arrayNoIntervalo = array.filter( num => num >= inicio && num <= fim );
  return {
    arrayNoIntervalo: arrayNoIntervalo,
    contador: arrayNoIntervalo.length
  };
}

module.exports = {
  getArrayNoIntervalo
}
