// Desafio 9
function getArrayNoIntervalo(array, inicio, fim) {
  const intervalo = array.filter(
    (numero) => numero >= inicio && numero <= fim, );

    const numero1 = intervalo.length;


return { intervalo: intervalo,
 numero1: numero1, };
   
}

 
var array = [14, 18, 27, 39, 68, 81, 93,115];
var inicio = 37
var fim = 81

const final = getArrayNoIntervalo(array,inicio,fim);

console.log(final);

module.exports = {
  getArrayNoIntervalo
}

  