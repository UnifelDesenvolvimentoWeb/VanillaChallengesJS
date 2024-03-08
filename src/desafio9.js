// Desafio 9
function getArrayNoIntervalo(array, inicio, fim) {

  let arrayInfo = {
    arrayNoIntervalo: [],
    contador: 0
};

  arrayInfo.arrayNoIntervalo = array.filter(e => {
      if(e >= inicio && e <= fim) {return e};
  });
  
  arrayInfo.contador = arrayInfo.arrayNoIntervalo.length;
  
  return arrayInfo;
}

module.exports = {
  getArrayNoIntervalo
}

  