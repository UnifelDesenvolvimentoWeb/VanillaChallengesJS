// Desafio 9
let array =  [5,2,3,2,2,7,8,4,4,5]
function getArrayNoIntervalo ( array, inicio, fim ){
  let result = array.filter((arr) => arr >= inicio && arr <= fim)
  return {
    arrayNoIntervalo : result,
    contador : result.length  
  }
}



module.exports = {
  getArrayNoIntervalo
}

  