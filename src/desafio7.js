function taxesCalcul(grossSalary) {

let aliquotaINSS;
let aliquotaIR;
  
    if (grossSalary <= 1556.94) {
      aliquotaINSS = grossSalary * 0.08;
    } else if (grossSalary <= 2594.92) {
      aliquotaINSS = grossSalary * 0.09;
    } else if (grossSalary <= 5189.82) {
      aliquotaINSS = grossSalary * 0.11;
    } else {
      aliquotaINSS = 570.88;
    }
  
const salarioBase = grossSalary - aliquotaINSS;
  
    if (salarioBase <= 1903.98) {
      aliquotaIR = 0;
    } else if (salarioBase <= 2826.65) {
      aliquotaIR = salarioBase * 0.075 - 142.80;
    } else if (salarioBase <= 3751.05) {
      aliquotaIR = salarioBase * 0.15 - 354.80;
    } else if (salarioBase <= 4664.68) {
      aliquotaIR = salarioBase * 0.225 - 636.13;
    } else {
      aliquotaIR = salarioBase * 0.275 - 869.36;
    }

    if (salarioFormatado.endsWith('0')) {
        salarioFormatado = salarioFormatado.slice(0, -1);
      }    
    
const salarioLiquido = salarioBase - aliquotaIR;
return `Salário: R$ ${salarioLiquido.toFixed(2)}`;

}

module.exports = {
    taxesCalcul
}