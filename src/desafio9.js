// Desafio 9
function getArrayNoIntervalo(array, inicio, fim) {
  let arrayNoIntervalo =[];

  for (let i = 0; i < array.length; i++) {
    if(array[i] >= inicio && array[i] <= fim) {
      arrayNoIntervalo.push(array[i]);
    }         
  } 

  return {
    arrayNoIntervalo: arrayNoIntervalo,
    contador: arrayNoIntervalo.length
  }
   
}

module.exports = {
  getArrayNoIntervalo
}

  