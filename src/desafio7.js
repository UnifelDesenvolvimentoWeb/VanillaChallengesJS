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
        return novoSalarioBrutoC.toFixed(2)
        
        

    } else if (salarioBrutoDig > 5189.82) {
        let novoSalarioBrutoD = salarioBrutoDig - 570.88
        return novoSalarioBrutoD
    } 
}
console.log(taxesCalcul(2826.65))


module.exports = {
    taxesCalcul
}