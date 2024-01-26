// Desafio 7
function taxesCalcul(grossSalary) {
let inss;
let ir;
if (grossSalary <= 1556.94) {
    inss = grossSalary * 0.08;
} else if (grossSalary <= 2594.92) {
    inss = grossSalary * 0.09;
} else if (grossSalary <= 5189.82) {
    inss = grossSalary * 0.11;
} else {
    inss = 570.88
}

let baseSalario = grossSalary - inss;

if (baseSalario <= 1903.98){
    ir = 0;
} else if (baseSalario <= 2826.65) {
    ir = (baseSalario * 0.075) - 142.80;
} else if (baseSalario <= 3751.05) {
    ir = (baseSalario * 0.15) - 354.80;
} else if (baseSalario <= 4664.68) {
    ir = (baseSalario * 0.225) - 636.13
} else {
    ir = (baseSalario * 0.275) - 869.36
}
let salarioLiquido = baseSalario - ir
return `Salário: R$ ${salarioLiquido}`;
}
console.log(taxesCalcul(3000));

module.exports = {
    taxesCalcul
}