// Desafio 7
function salariobruto(salario) {
    var sminimo = salario - (salario * 0.08);
    var smedio = salario - (salario * 0.09);
    var smaior = salario - (salario * 0.011);
    var salary = salario - 570.88;

    if (salario === 0) {
        return 0
    }
    if (salario <= 1556.94 || salario <= 2594.92) {
        return sminimo
    }
    if (salario = 2594.93 || salario <= 5189.81) {
        return smedio
    }
    if (salario >= 5189.82) {
        return smaior
    } else { return salary };

}

function taxesCalcul(grossSalary) {
    var salarioliquido = salariobruto(grossSalary);

    var salariominimo = salarioliquido - (salarioliquido * 0.075 - 142.80);
    var salariomedio = salarioliquido - (salarioliquido * 0.150 - 354.80);
    var salariomaior = salarioliquido - (salarioliquido * 0.225 - 636.13);
    var salarioalto = salarioliquido - (salarioliquido * 0.275 - 869.36);


    if (salarioliquido === 0) {
        console.log( ' salario R$ ' + 0);
        return 'salario R$' + 0
        
    } else if (salarioliquido <= 1903.98) { 
         
        return 'salario R$' + salarioliquido 
    }
    if (salarioliquido <= 2826.65) {
        console.log('salario R$ '  + salariominimo) ;
        return 'salario R$' + salariominimo
    }
    if (salarioliquido <= 3751.05 ) {
        console.log ('salario R$ ' + salariomedio) ;
        return 'salario R$' + salariomedio
    }
    if (salarioliquido <= 4664.68 ) {
        console.log ('salario R$ ' + salariomaior);
        return 'salario R$' + salariomaior
    }else {
        console.log('salario R$'+ salarioalto );
        return 'salario R$' + salarioalto
    }

}

console.log(taxesCalcul(6000));

module.exports = {
    taxesCalcul
}