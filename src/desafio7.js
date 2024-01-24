// Desafio 7
function taxesCalcul(grossSalary) {
    // Variaveis que vão receber os valores
    let DescINSS = 0
    let AliqInss = 0
    let salarioBase = 0
    // Quando o valor é acima de 5189.82 ele retorna o valor de DescINSS direto, eu n preciso calcular com a Funçao calcDescINSS para isso serve a condicional!
    if(grossSalary > 5189.82){
        verificarAliqINSS()
        salarioBase = grossSalary - DescINSS 
    }
    else{
        verificarAliqINSS(grossSalary)
        calcDescINSS(grossSalary, AliqInss)
        salarioBase = grossSalary - DescINSS
    }


    // Função que vai verificar qual é a Aliquota do INSS em % perante ao Salario Bruto
    function verificarAliqINSS(grossSalary){
        if(grossSalary > 5189.82){
            DescINSS = 570.88
        }
        else if( grossSalary >= 2594.92){
            AliqInss = 0.11
        }
        else if(grossSalary >= 1556.95){
            AliqInss = 0.09
        }
        else if(grossSalary <= 1556.94){
            AliqInss = 0.08
        }  
    }
    // Funçao que calcula o valor a ser descontado do salario bruto
    function calcDescINSS(grossSalary, AliqInss){
        DescINSS = grossSalary * AliqInss
    }
    
    console.log(salarioBase);
}
taxesCalcul(3054)

module.exports = {
    taxesCalcul
}