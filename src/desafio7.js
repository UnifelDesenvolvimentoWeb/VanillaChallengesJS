// Desafio 7
function taxesCalcul(grossSalary) {

    if(grossSalary > 0 && grossSalary <= 1556.94) {
        grossSalary -= grossSalary * 0.08;
    } 
    else if(grossSalary <= 2594.92) {
        grossSalary -= grossSalary * 0.09;
    }
    else if(grossSalary <= 5189.92) {
        grossSalary -= grossSalary * 0.11;
    }
    else {
        grossSalary -= 570.88;
    }

    console.log(grossSalary)

    if(grossSalary >= 1903.99 && grossSalary <= 2826.65) {
        grossSalary -= (grossSalary * 0.075) - 142.80;
    }
    else if (grossSalary >= 2826.66 && grossSalary <= 3751.05) {
        grossSalary -= (grossSalary * 0.15) - 354.80;
    }
    else if (grossSalary >= 3751.06 && grossSalary <= 4664.68) {
        grossSalary -= (grossSalary * 0.225) - 636.13;
    }
    else if (grossSalary >= 4664.69) {
        grossSalary -= (grossSalary * 0.275) - 869.36;
    }

    return `Salário: R$ ${grossSalary}`
}

module.exports = {
    taxesCalcul
}