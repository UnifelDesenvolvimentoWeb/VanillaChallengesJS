// Desafio 9
function getArrayNoIntervalo(array, inicio, fim) {
  const newArray = array.sort((a,b) => {
    return a-b;
  });
  let result = []
  let contador = 0
  
  if (array.length === 0) {
    return ({"arrayNoIntervalo": [], "contador": 0})
  } else if(inicio > fim) {
    return ({"arrayNoIntervalo": [], "contador": 0})
  } else {
    for (let index = 0; index < array.length; index += 1) {
      if (newArray[index] === inicio){
        result.push(newArray[index]);
        contador += 1
      } else if(newArray[index] > inicio & newArray[index] < fim) {
        result.push(newArray[index]);
        contador += 1
      } else if (newArray[index] === fim) {
        result.push(newArray[index]);
        contador += 1
      }
    }
    return ({"arrayNoIntervalo": result , "contador": contador})
  }   
}

module.exports = {
  getArrayNoIntervalo
}

  