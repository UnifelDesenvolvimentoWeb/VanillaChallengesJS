// Desafio 9

array= [22, 110, 224, 2, 7, 998, 45, 67, 46]

function getArrayNoIntervalo(array, inicio, fim) {
  
  let arrayNoIntervalo = [];

  for (let index = 0; index < array.length; index++) {
     if (array[index] >= inicio && array[index] <= fim) {
        arrayNoIntervalo.push(array[index]);
     }
  }
    
  return{
    arrayNoIntervalo: arrayNoIntervalo,
    contador: arrayNoIntervalo.length
  }

}
console.log(getArrayNoIntervalo(array, 2, 45))
module.exports = {
  getArrayNoIntervalo
}

  