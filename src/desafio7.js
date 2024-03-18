// Desafio 7

let grossSalary = 3000

function taxesCalcul(grossSalary) {
    let irUm = ((7.5 * grossSalary) / 100).toFixed(2)
    let irDois = ((15 * grossSalary) / 100).toFixed(2)
    let irTres = ((22.5 * grossSalary) / 100).toFixed(2)
    let irQuatro = ((27.5 * grossSalary) / 100).toFixed(2)

    if ( grossSalary <= 2259.20 ){
        return console.log('Sua alíquota é zero, você não precisa fazer a dedução do IR')        
    } else {
        if ( grossSalary  <= 2826.65 ){
            return console.log(`Sua alíquota é 7,5%, você precisa fazer a dedução de R$ ${(7.5 * grossSalary) / 100} do IR. Salário: R$ ${irUm} do IR. Salário: R$ ${ grossSalary - irUm }`) 
        } else {
            if ( grossSalary  <= 3751.05 ){
                return console.log(`Sua alíquota é 15%, você precisa fazer a dedução de R$ ${irDois} do IR. Salário: R$ ${ grossSalary - irDois } `)
            } else {
                if ( grossSalary  <= 4664.68 ){
                    return console.log(`Sua alíquota é 22.5%, você precisa fazer a dedução de R$ ${irTres} do IR. Salário: R$ ${ grossSalary - irTres } `)
                } else {
                    if ( grossSalary  > 4664.68 ){
                        return console.log(`Sua alíquota é 27.5%, você precisa fazer a dedução de R$ ${irQuatro} do IR. Salário: R$ ${ grossSalary - irQuatro } `)
                    }
            }
        } 
    } 
}
}
console.log(taxesCalcul(grossSalary))

module.exports = {
    taxesCalcul
}