// Desafio 7
function taxesCalcul(grossSalary) {
    let salarioBase;
    let salarioLiquido;

    if(grossSalary <= 1556.94){
        salarioBase = grossSalary - grossSalary * (8 / 100);
    }
    else if(grossSalary >= 1556.95 && grossSalary <= 2594.92){
        salarioBase = grossSalary - grossSalary * (9 / 100);
    }
    else if(grossSalary >= 2594.93 && grossSalary <= 5189.82){
        salarioBase = grossSalary - grossSalary * (11 / 100);
    }
    else{
        salarioBase = grossSalary - 570.88;
    }

    if(salarioBase <= 1903.98){
        salarioLiquido = salarioBase;
        return `Salário: R$ ${salarioLiquido}`;
    }
    else if(salarioBase >= 1903.99 && salarioBase <= 2826.65){
        salarioLiquido = salarioBase - (salarioBase * (7.5 / 100)) + 142.80;
        return `Salário: R$ ${salarioLiquido}`;
    }
    else if(salarioBase >= 2826.66 && salarioBase <= 3751.05){
        salarioLiquido = salarioBase - (salarioBase * (15 / 100)) + 354.80;
        return `Salário: R$ ${salarioLiquido}`;
    }
    else if(salarioBase >= 3751.06 && salarioBase <= 4664.68){
        salarioLiquido = salarioBase - (salarioBase * (22.5 / 100)) + 636.13;
        return `Salário: R$ ${salarioLiquido}`;
    }
    else{
        salarioLiquido = salarioBase - (salarioBase * (27.5 / 100)) + 869.36;
        return `Salário: R$ ${salarioLiquido}`;
    }
}

module.exports = {
    taxesCalcul
}