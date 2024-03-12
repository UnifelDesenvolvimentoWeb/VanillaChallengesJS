// Desafio 7
function taxesCalcul(grossSalary) {
    let salarioBase
    let salarioLiquido
    let aliquotaINSS
    let aliquotaIR

    if (grossSalary <= 1556.94) {
        aliquotaINSS = grossSalary * 0.08 
        salarioBase = grossSalary - aliquotaINSS
    } else if ( grossSalary > 1556.94 && grossSalary <= 2594.92) {
        aliquotaINSS = grossSalary * 0.09 
        salarioBase = grossSalary - aliquotaINSS
    } else if ( grossSalary > 2594.92 && grossSalary <= 5189.82) {
        aliquotaINSS = grossSalary * 0.11 
        salarioBase = grossSalary - aliquotaINSS
    } else { 
        salarioBase = grossSalary - 570.88
    }

    if (salarioBase <= 1903.98) {
        salarioLiquido = salarioBase
    } else if ( salarioBase > 1903.98 && salarioBase <= 2826.65) {
        aliquotaIR = salarioBase * 0.075 - 142.80
        salarioLiquido = salarioBase - aliquotaIR
    } else if ( salarioBase > 2826.65 && salarioBase <= 3751.05) {
        aliquotaIR = salarioBase * 0.15 - 354.80
        salarioLiquido = salarioBase - aliquotaIR
    } else if ( salarioBase > 3751.05 && salarioBase <= 4664.68) {
        aliquotaIR = salarioBase * 0.225 - 636.13
        salarioLiquido = salarioBase - aliquotaIR
    } else {
        aliquotaIR = salarioBase * 0.275 - 869.36
        salarioLiquido = salarioBase - aliquotaIR
    }

    return `Salário: R$ ${salarioLiquido}`
}

module.exports = {
    taxesCalcul
}