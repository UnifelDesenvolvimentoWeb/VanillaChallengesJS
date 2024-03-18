// Desafio 7
function taxesCalcul(grossSalary) {
    if ( grossSalary <= 2259.20 ){
        return console.log('Sua alíquota é zero, você não precisa fazer a dedução do IR')        
    } else {
        if ( grossSalary  <= 2826.65 ){
            return console.log(`Sua alíquota é 7,5%, você precisa fazer a dedução de R$ ${(7.5 * grossSalary) / 100} do IR`) 
        } else {
            if ( grossSalary  <= 3751.05 ){
                return console.log(`Sua alíquota é 15%, você precisa fazer a dedução de R$ ${(15 * grossSalary) / 100} do IR`)
            } else {
                if ( grossSalary  <= 4664.68 ){
                    return console.log(`Sua alíquota é 22.5%, você precisa fazer a dedução de R$ ${(22.5 * grossSalary) / 100} do IR`)
                } else {
                    if ( grossSalary  > 4664.68 ){
                        return console.log(`Sua alíquota é 27.5%, você precisa fazer a dedução de R$ ${(27.5 * grossSalary) / 100} do IR`)
                    }
            }
        } 
    } 
}
}

module.exports = {
    taxesCalcul
}