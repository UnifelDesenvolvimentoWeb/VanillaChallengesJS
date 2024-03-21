// Desafio 9 
// slice()

const array = [10,9,3,11,68,16,102,8,30,21];

let inicio = 9
let fim = 16

function getArrayNoIntervalo(array, inicio, fim) {
  const arrayNoIntervalo = []
  let contador = 0
  let posicaoInicio = array.indexOf(inicio)
  let posicaoFim = array.indexOf(fim)

  if (array != '' ) {
      for ( let index = posicaoInicio ; index <= posicaoFim ; index += 1){
            arrayNoIntervalo.push(array[index])
            contador += 1
      } 
  }
  
  return console.log( `Matriz: ${arrayNoIntervalo}  contador: ${contador}` )
  }

console.log(getArrayNoIntervalo(array, inicio, fim))



module.exports = {
  getArrayNoIntervalo
}

  