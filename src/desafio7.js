// Desafio 7
function taxesCalcul(grossSalary) {
 
let salarioLiquido;

let descontoInss;
if (grossSalary <= 1556.94){
    console.log(`Salário: R$` + (descontoInss = grossSalary * 0.08));
} else if (grossSalary <= 2594.92) {
    console.log(`Salário: R$` + (descontoInss = grossSalary * 0.09));
} else if (grossSalary <= 5189.82) {
    console.log(`Salário: R$` + (descontoInss = grossSalary * 0.11));
} else {
    console.log(`Salário: R$` + (descontoInss = 570.88));
}

let descontoIr;
let salarioBase = grossSalary - descontoInss;
if(salarioBase <= 1903.98) {
    descontoIr = 0;
} else if(salarioBase <= 2826.65) {
    descontoIr = salarioBase * 0.075 - 142.80;
} else if (salarioBase <= 3751.05) {
    descontoIr = salarioBase * 0.15 - 354.80;
} else if(salarioBase <= 4664.68) {
    descontoIr = salarioBase * 0.225 - 636.13;
} else {
    descontoIr = salarioBase * 0.275 - 869.36;
}

salarioLiquido = salarioBase - descontoIr
return `Salário: R$ ${salarioLiquido}`

}

module.exports = {
    taxesCalcul
}