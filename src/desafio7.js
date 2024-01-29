// Desafio 7
function taxesCalcul(grossSalary) {
    let inss;

  if (grossSalary <= 1556.94) {
    inss = grossSalary * 0.08;
  } else if (grossSalary <= 2594.92) {
    inss = grossSalary * 0.09;
  } else if (grossSalary <= 5189.92) {
    inss = grossSalary * 0.11;
  } else {
    inss = 570.88;
  }

  const salarioBase = grossSalary - inss;

  const ir = calcularIR(salarioBase);

  const salarioLiquido = salarioBase - ir;

  return {
    salarioBruto: grossSalary.toFixed(2),
    inss: inss.toFixed(2),
    salarioBase: salarioBase.toFixed(2),
    ir: ir.toFixed(2),
    salarioLiquido: salarioLiquido.toFixed(2),
  };
}

function calcularIR(salarioBase) {
  
  return salarioBase * 0.15;
}

const salarioBrutoExemplo = 3000.0;
const resultado = taxesCalcul(salarioBrutoExemplo);

console.log("Resultado:");
console.log("Salario Bruto:", resultado.salarioBruto);
console.log("INSS:", resultado.inss);
console.log("Salário Base:", resultado.salarioBase);
console.log("IR:", resultado.ir);
console.log("Salário Líquido:", resultado.salarioLiquido);

module.exports = {
taxesCalcul

}