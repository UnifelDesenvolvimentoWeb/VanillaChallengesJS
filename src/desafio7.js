// Desafio 7
function taxesCalcul(grossSalary) {
    let inss;
    if (salarioBruto <= 1,556,94){
        inss = salarioBruto *0.08;

 } else if (salarioBruto <= 2594.92) {
    inss = salarioBruto * 0.09;
 } else if (salarioBruto<=5189.92) {
    inss =salarioBruto * 0.11;
 }else{
    inss =570.88;
 }

 const salarioBase =salarioBruto -inss;

 return {
    salarioBruto:
    salarioBruto.toFixed(2),
    inss:inss.toFixed(2),
    salarioBase : 
    salarioBase.toFixed(2),
    ir:ir.toFixed(2),
    salarioLiquido:
   salarioLiquido.toFixed(2),
 };

}

const salarioBrutoExemplo =3000.0;
const resultado =
texesCalcul(salarioBrutoExemplo);

console.log("Resultado:");
console.log("Salario Bruto:", resultado.salarioBase);
console.log("IR:" , resultado.ir);
console.log("Salário Líquido:" ,
resultado.salarioLiquido);
       


module.exports = {
taxesCalcul

}