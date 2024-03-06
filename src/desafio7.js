// Desafio 7
function taxesCalcul(grossSalary) {
    let inss;
    let salarioBase;
    let ir;
    let salarioLiquido;

    // calculando o INSS
    if (grossSalary <= 1556.94) {
        inss = grossSalary * 0.08;
    } else if (grossSalary <= 2594.92) {
        inss = grossSalary * 0.09;
    } else if (grossSalary <= 5189.82) {
        inss = grossSalary * 0.11;
    } else {
        inss = 570.88;
    }

    // salario base calculado
    salarioBase = grossSalary - inss;

    //  calculando o IR
    if (salarioBase <= 1903.98) {
        ir = 0;
    } else if (salarioBase <= 2826.65) {
        ir = (salarioBase * 0.075) - 142.80;
    } else if (salarioBase <= 3751.05) {
        ir = (salarioBase * 0.15) - 354.80;
    } else if (salarioBase <= 4664.68) {
        ir = (salarioBase * 0.225) - 636.13;
    } else {
        ir = (salarioBase * 0.275) - 869.36;
    }

    // calculando o salario liquido
    salarioLiquido = salarioBase - ir;

    if (salarioLiquido < 0) {
        return 0;
    }
    

    return "Salário: R$ " + salarioLiquido;
    
 
}
console.log("Salário: R$ " + taxesCalcul(4200));
module.exports = {
    taxesCalcul
}