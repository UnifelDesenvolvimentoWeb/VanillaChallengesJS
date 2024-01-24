// Desafio 7
function taxesCalcul(grossSalary) {
 let inss;
 let ir;
 if (grossSalary <= 1556.94) {
    inss = grossSalary * 0.08;
} else if (grossSalary <= 2594.92) {
    inss = grossSalary * 0.09;
} else if (grossSalary <= 5189.82) {
    inss = grossSalary * 0.11;
} else {
    inss = 570.88
}
return inss
}
console.log(taxesCalcul(5189.82));
module.exports = {
    taxesCalcul
}