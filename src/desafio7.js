// Desafio 7
function taxesCalcul(grossSalary) {
    // Variaveis que vão receber os valores
    let DescINSS = 0
    let AliqInss = 0
    let valorIR = 0
    let AliqIR = 0
    let parcelaIR = 0 
    let descAliqIR = 0
    let salarioBase = 0
    let salarioLiquido = 0
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

    verificarAliqIR(salarioBase)
    calcDescAliqIR(salarioBase,AliqIR)
    valorIR = descAliqIR - parcelaIR
    salarioLiquido = salarioBase - valorIR
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
     function verificarAliqIR(salarioBase){
        if(salarioBase >=  4664.68){
            AliqIR = 0.275
            parcelaIR = 869.36
        }
        else if(salarioBase >= 3751.06){
            AliqIR = 0.225
            parcelaIR = 636.13
        }
        else if (salarioBase >= 2826.66){
            AliqIR = 0.15
            parcelaIR = 354.80
        }
        else if (salarioBase >= 1903.99){
            AliqIR = 0.075
            parcelaIR = 142.80
        }
    }
    function calcDescAliqIR(salarioBase,AliqIR){
        descAliqIR = salarioBase * AliqIR
    }
    
    return salarioLiquido
}
console.log(taxesCalcul(4200))

module.exports = {
    taxesCalcul
}