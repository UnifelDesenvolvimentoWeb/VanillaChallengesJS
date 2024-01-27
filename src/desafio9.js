// Desafio 9
function getArrayNoIntervalo(array, inicio, fim) {
  const arrayNoIntervalo = []
  let contador = 0;
  for(let value of array){
    if(value >= inicio && value <= fim){ 
      arrayNoIntervalo[contador] = value;
      contador += 1;
    }
  }
  return {arrayNoIntervalo, contador};
}

module.exports = {
  getArrayNoIntervalo
}

  