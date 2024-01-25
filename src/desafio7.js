// Desafio 7

function taxesCalcul(grossSalary) {
    let salario = grossSalary
    let salarioBruto = Number(salario)
    let salarioBrutoDig = salarioBruto
    if (salarioBrutoDig === 0) {
        return `Salário: R$ ${salarioBrutoDig.toFixed(0)}`
    }
    if (salarioBrutoDig <= 1556.94) {
        let inssA = 0.08
        let licotaSalarioBrutoA = salarioBrutoDig * inssA
        let novoSalarioBrutoA = salarioBrutoDig - licotaSalarioBrutoA
        if (novoSalarioBrutoA <= 1903.98) {
            return `Salário: R$ ${novoSalarioBrutoA.toFixed(1)}`
        }
    } else if (salarioBrutoDig >= 1556.95 && salarioBrutoDig <= 2594.92) {
        let inssB = 0.09
        let licotaSalarioBrutoB = salarioBrutoDig * inssB
        let novoSalarioBrutoB = salarioBrutoDig - licotaSalarioBrutoB
        if (novoSalarioBrutoB <= 1903.98) {
            return `Salário: R$ ${novoSalarioBrutoB.toFixed(0)}`
        } else if (novoSalarioBrutoB >= 1903.99 && novoSalarioBrutoB <= 2826.65) {
            let irb = 0.075
            let salarioLiqB = novoSalarioBrutoB * irb
            let salarioLiqBF = salarioLiqB - 142.80
            let salarioLiquidoFinalB = novoSalarioBrutoB - salarioLiqBF
            return `Salário: R$ ${salarioLiquidoFinalB.toFixed(2)}`
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
            return `Salário: R$ ${salarioLiquidoFinalD.toFixed(2)}`
        } else if(novoSalarioBrutoC >= 2826.66 && novoSalarioBrutoC <= 3751.05) {
            let irc = 0.15
            let salarioLiqC = novoSalarioBrutoC * irc
            let salarioLiqCF = salarioLiqC - 354.80
            let salarioLiquidoFinalC = novoSalarioBrutoC - salarioLiqCF
            return `Salário: R$ ${salarioLiquidoFinalC.toFixed(1)}`  
        }
    } else if (salarioBrutoDig > 5189.82) {
        let novoSalarioBrutoD = salarioBrutoDig - 570.88
        if (novoSalarioBrutoD >= 3751.06 && novoSalarioBrutoD <= 4664.68) {
            let ire = 0.225
            let salarioLiqE = novoSalarioBrutoD * ire
            let salarioLiqEF = salarioLiqE - 636.13
            let salarioLiquidoFinalE = novoSalarioBrutoD - salarioLiqEF
            return `Salário: R$ ${salarioLiquidoFinalE.toFixed(2)}`
        } else if (novoSalarioBrutoD > 4664.68) {
            let irf = 0.275
            let salarioLiqF = novoSalarioBrutoD * irf
            let salarioLiqFF = salarioLiqF - 869.36
            let salarioLiquidoFinalF = novoSalarioBrutoD - salarioLiqFF
            return `Salário: R$ ${salarioLiquidoFinalF.toFixed(2)}`
        } 
    } 
}
console.log(taxesCalcul(0))


module.exports = {
    taxesCalcul
}