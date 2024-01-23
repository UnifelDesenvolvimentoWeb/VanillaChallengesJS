// Desafio 7

function taxesCalcul(grossSalary) {
    let salario = grossSalary
    let salarioBruto = Number(salario)
    let salarioBrutoDig = salarioBruto
    if (salarioBrutoDig <= 1556.94) {
        let inssA = 0.08
        let licotaSalarioBrutoA = salarioBrutoDig * inssA
        let novoSalarioBrutoA = salarioBrutoDig - licotaSalarioBrutoA
        if (novoSalarioBrutoA <= 1903.98) {
            return `O salário Liquido é: R$ ${novoSalarioBrutoA.toFixed(2)}`
        }
    } else if (salarioBrutoDig >= 1556.95 && salarioBrutoDig <= 2594.92) {
        let inssB = 0.09
        let licotaSalarioBrutoB = salarioBrutoDig * inssB
        let novoSalarioBrutoB = salarioBrutoDig - licotaSalarioBrutoB
        if (novoSalarioBrutoB <= 1903.98) {
            return `O salário Liquido é: R$ ${novoSalarioBrutoB.toFixed(2)}`
        } else if (novoSalarioBrutoB >= 1903.99 && novoSalarioBrutoB <= 2826.65) {
            let irb = 0.075
            let salarioLiqB = novoSalarioBrutoB * irb
            let salarioLiqBF = salarioLiqB - 142.80
            let salarioLiquidoFinalB = novoSalarioBrutoB - salarioLiqBF
            return `O salário Liquido é: R$ ${salarioLiquidoFinalB.toFixed(2)}`
        }
    } else if (salarioBrutoDig >= 2594.93 && salarioBrutoDig <= 5189.82) {
        let inssC = 0.11
        let licotaSalarioBrutoC = salarioBrutoDig * inssC
        let novoSalarioBrutoC = salarioBrutoDig - licotaSalarioBrutoC
        if (novoSalarioBrutoC >= 1903.99 && novoSalarioBrutoC <= 2826.65) {
            let ird = 0.075
            let salarioLiqD = novoSalarioBrutoC * ird
            let salarioLiqDF = salarioLiqD - 142.80
            let salarioLiquidoFinalD = novoSalarioBrutoC - salarioLiqDF
            return `O salário liquido é: R$ ${salarioLiquidoFinalD.toFixed(2)}`
        } else if(novoSalarioBrutoC >= 2826.66 && novoSalarioBrutoC <= 3751.05) {
            let irc = 0.15
            let salarioLiqC = novoSalarioBrutoC * irc
            let salarioLiqCF = salarioLiqC - 354.80
            let salarioLiquidoFinalC = novoSalarioBrutoC - salarioLiqCF
            return `O salário liquido é: R$ ${salarioLiquidoFinalC.toFixed(2)}`  
        }
    } else if (salarioBrutoDig > 5189.82) {
        let novoSalarioBrutoD = salarioBrutoDig - 570.88
        return novoSalarioBrutoD.toFixed(2)
    } 
}
console.log(taxesCalcul(4200))


module.exports = {
    taxesCalcul
}