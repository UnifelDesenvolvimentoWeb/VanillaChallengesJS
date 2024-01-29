// Desafio 7
function salaryBruto (salary)
        {const salaryMinimo = salary - (salary * 0.08);
        const salaryMedio = salary - (salary * 0.09);
        const salaryAlto = salary - (salary * 0.11);
        const salarySuper = salary - 570.88;
        
        if (salary === 0) {return 0}
        if (salary <= 1556.94) {return salaryMinimo}
        if (salary <= 2594.92) {return salaryMedio}
        if (salary <= 5189.82) {return salaryAlto}
        else {return salarySuper};} 

function taxesCalcul(salary) {
    const salaryLiq = salaryBruto (salary)

    const min = salaryLiq - (salaryLiq * 0.075 - 142.80)
    const med = salaryLiq - (salaryLiq * 0.150 - 354.80)
    const alt = salaryLiq - (salaryLiq * 0.225 - 636.13)
    const sup = salaryLiq - (salaryLiq * 0.275 - 869.36)

    if (salaryLiq === 0) {return 'Salário: R$ ' + 0}
    else{if (salaryLiq <= 1903.98) {return 'Salário: R$ ' + salaryLiq}
        if (salaryLiq <= 2826.65) {return 'Salário: R$ ' + min}
        if (salaryLiq <= 3751.05) {return 'Salário: R$ ' + med}
        if (salaryLiq <= 4664.68) {return 'Salário: R$ ' + alt}
        else {return 'Salário: R$ ' + sup}}
    
    }

    console.log(taxesCalcul(3000));


















module.exports = {
    taxesCalcul
}