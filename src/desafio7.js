// Desafio 7

function taxesCalcul(grossSalary) {
  const SALARIOS_RANGES = [
    { min: 0, max: 1556.94, rate: 0.08 },
    { min: 1556.95, max: 2594.92, rate: 0.09 },
    { min: 2594.93, max: 5189.82, rate: 0.11 },
    { min: 5189.83, max: Infinity, rateFixo: 570.88 },
  ];

  const SALARIOS_RANGES_IR = [
    { min: 0, max: 1903.98, rate: 0, deduction: 0 },
    { min: 1903.99, max: 2826.65, rate: 0.075, deduction: 142.8 },
    { min: 2826.66, max: 3751.05, rate: 0.15, deduction: 354.8 },
    { min: 3751.06, max: 4664.68, rate: 0.225, deduction: 636.13 },
    { min: 4664.68, max: Infinity, rate: 0.275, deduction: 869.36 },
  ];

  function calcularSalarioBase(salary) {
    for (const range of SALARIOS_RANGES) {
      if (salary > range.min && salary <= range.max) {
        if (range.rateFixo) {
          return salary - range.rateFixo;
        }
        return salary * (1 - range.rate);
      }
    }
    return 0;
  }

  function calcularImpostoDeRenda(salaryBase) {
    for (range of SALARIOS_RANGES_IR) {
      if (salaryBase >= range.min && salaryBase <= range.max) {
        if (range.rate === 0) {
          return 0;
        }
        return salaryBase * range.rate - range.deduction;
      }
    }
    return 0;
  }

  const salarioBase = calcularSalarioBase(grossSalary);
  const taxaIR = calcularImpostoDeRenda(salarioBase).toFixed(2);
  const salarioLiquido = (salarioBase - taxaIR).toFixed(2);
  return formatSalario(salarioLiquido);
}
module.exports = {
  taxesCalcul,
};

function formatSalario(salary) {
  let salarioLiquido = String(salary);
  if (salarioLiquido[salarioLiquido.length - 1] == 0) {
    if (salarioLiquido[salarioLiquido.length - 2] == 0) {
      salarioLiquido = Number(salarioLiquido).toFixed(0);
    } else {
      salarioLiquido = Number(salarioLiquido).toFixed(1);
    }
  }
  return `Salário: R$ ${salarioLiquido}`;
}
