// Desafio 7
function salarioBruto (salary)
{const sMinimo = salary - (salary * 0.08);
const sMedio = salary - (salary * 0.09);
const sAlto = salary - (salary * 0.11);
const sSuperior = salary - 570.88;

if (salary === 0) {return 0}
if (salary <= 1556.94) {return sMinimo}
if (salary <= 2594.92) {return sMedio}
if (salary <= 5189.82) {return sAlto}
else {return sSuperior};} 

function taxesCalcul(salary) {
const sLiquido = salarioBruto (salary)

const min = sLiquido - (sLiquido * 0.075 - 142.80)
const med = sLiquido - (sLiquido * 0.150 - 354.80)
const alt = sLiquido - (sLiquido * 0.225 - 636.13)
const sup = sLiquido - (sLiquido * 0.275 - 869.36)

if (sLiquido === 0) {return 'Salário: R$ ' + 0}
else{if (sLiquido <= 1903.98) {return 'Salário: R$ ' + sLiquido}
if (sLiquido <= 2826.65) {return 'Salário: R$ ' + min}
if (sLiquido <= 3751.05) {return 'Salário: R$ ' + med}
if (sLiquido <= 4664.68) {return 'Salário: R$ ' + alt}
else {return 'Salário: R$ ' + sup}}

}
module.exports = {
    taxesCalcul
}