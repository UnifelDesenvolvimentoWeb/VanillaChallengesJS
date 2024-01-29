// Desafio 9
function getArrayNoIntervalo(array, inicio, fim) {
  const arrayNoIntervalo = array.filter(
    (numero) => numero >= inicio && numero <= fim,
  );

  const contador = arrayNoIntervalo.length;

  return {
    arrayNoIntervalo: arrayNoIntervalo,
    contador: contador,
  };
}

const arrayOriginal = [14, 18, 27, 39, 68, 81, 93, 115];
const inicio = 37;
const fim = 81;

const resultado = getArrayNoIntervalo(arrayOriginal, inicio, fim);
console.log(resultado);


module.exports = {
  getArrayNoIntervalo
}

  