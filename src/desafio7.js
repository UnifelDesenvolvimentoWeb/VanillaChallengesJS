// Desafio 7


function taxesCalcul(grossSalary) {

    let netSalary = 0;
    let baseSalary = 0;
    let inss = 0;
    let ir = 0;

    if (grossSalary <= 1556.94) {
        inss = grossSalary * 0.08;
    } else if (grossSalary <= 2594.92) {
        inss = grossSalary * 0.09;
    } else if (grossSalary <= 5189.82) {
        inss = grossSalary * 0.11;
    } else if (grossSalary > 5189.82) {
        inss = 570.88;
    }

    baseSalary = grossSalary - inss

    if (baseSalary <= 1903.98) {
        ir = 0;
    } else if (baseSalary <= 2826.65) {
        ir = baseSalary * 0.075 - 142.80; 
    } else if (baseSalary <= 3751.05) {
        ir = baseSalary * 0.15 - 354.80;
    } else if (baseSalary <= 4664.68) {
        ir = baseSalary * 0.225 - 636.13;
    } else {
        ir = baseSalary * 0.275 - 869.36;
    }

    netSalary = baseSalary - ir;
    
    return `Salário: R$ ${netSalary.toString()}`;
} console.log(taxesCalcul(1200))

module.exports = {
    taxesCalcul
}