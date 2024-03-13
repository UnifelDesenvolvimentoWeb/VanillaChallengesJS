// Desafio 7
function taxesCalcul(grossSalary) {
 
}

function taxesCalcul(grossSalary) {
    let inss = 0;
    let ir = 0;

    // Calcula o INSS
    if (grossSalary <= 1556.94) {
        inss = grossSalary * 0.08;
    } else if (grossSalary <= 2594.92) {
        inss = grossSalary * 0.09;
    } else if (grossSalary <= 5189.82) {
        inss = grossSalary * 0.11;
    } else {
        inss = 570.88;
    }

    // Calcula o salário base (já deduzindo o INSS)
    let salarioBase = grossSalary - inss;

    // Calcula o IR
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

    // Calcula o salário líquido
    let salarioLiquido = salarioBase - ir;

    return `Salário: R$ ${salarioLiquido.toFixed(2)}.`;
}

// Testes
console.log(taxesCalcul(3000)); // Saída: Salário: R$ 2612.55.
console.log(taxesCalcul(2000)); // Saída: Salário: R$ 1820.00.
console.log(taxesCalcul(4200)); // Saída: Salário: R$ 3532.10.




module.exports = {
    taxesCalcul
}