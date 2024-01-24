// Desafio 7
function taxesCalcul(grossSalary) {
    let salary = 0
    let salary2 = 0
    
    if(grossSalary <= 1556.94) {
        salary += grossSalary
        salary -= grossSalary*(8/100)
    } else if(1556.95 <= grossSalary && grossSalary <= 2594.92){
        salary += grossSalary
        salary -= grossSalary*(9/100)
    } else if(2594.93 <= grossSalary && grossSalary <= 5189.82){
        salary += grossSalary
        salary -= grossSalary*(11/100)
    } else if(5189.82 < grossSalary) {
        salary += grossSalary
        salary -= 570.88
    }

    if(salary <= 1903.98) {
            salary2 += salary
    } else if(1903.99 <= salary && salary <= 2826.65) {
        salary2 += salary
        salary2 -= (salary*(7.5/100) - 142.80)
    } else if(2826.66 <= salary && salary <= 3751.05) {
        salary2 += salary
        salary2 -= (salary*(15/100) - 354.80)
    } else if(3751.06 <= salary && salary <= 4664.68) {
        salary2 += salary
        salary2 -= (salary*(22.5/100) - 636.13)
    } else if(salary > 4664.68) {
        salary2 += salary
        salary2 -= (salary*(27.5/100) - 869.36)
    }
    return (`Salário: R$ ${salary2}`)
}

module.exports = {
    taxesCalcul
}