// Desafio 9
function getArrayNoIntervalo(array, inicio, fim) {
  const newArr = array.sort((x,y) => {
    return x-y;
  });
  let res = []
  let cont = 0

  if (array.length === 0) {
    return ({"arrayNoIntervalo": [], "contador": 0})
  } else if(inicio > fim) {
    return ({"arrayNoIntervalo": [], "contador": 0})
  } else {
    for (let index = 0; index < array.length; index += 1) {
      if (newArr[index] === inicio){
        res.push(newArr[index]);
        cont += 1
      } else if(newArr[index] > inicio & newArr[index] < fim) {
        res.push(newArr[index]);
        cont += 1
      } else if (newArr[index] === fim) {
        res.push(newArr[index]);
        cont += 1
      }
    }
    return ({"arrayNoIntervalo": res , "contador": cont})
  }   
   
}
module.exports = {
  getArrayNoIntervalo
}

  