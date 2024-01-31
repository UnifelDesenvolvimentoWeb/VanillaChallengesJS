// Desafio 7
function taxesCalcul(grossSalary) {
    if(grossSalary < 1556.94)
        grossSalary -= (grossSalary - ((8/100) * grossSalary))

    else if(grossSalary < 2594.92)
        grossSalary -= (grossSalary - ((8/100) * grossSalary))

    else if(grossSalary < 5189.82)
        grossSalary -= (grossSalary - ((8/100) * grossSalary))

    else
        grossSalary -= 570.88
    
    
}

module.exports = {
    taxesCalcul
}