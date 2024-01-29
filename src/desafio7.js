// Desafio 7
function taxesCalcul(grossSalary) {
 let salarioBruto = grossSalary
 let salarioBase = 0
 let salarioLiquido = 0
 let valorInss = 0
 let valorIr = 0
	if(salarioBruto> 0 && salarioBruto <= 1556.94){
		valorInss = salarioBruto*.08
		salarioBase = salarioBruto-valorInss		
		}else if(salarioBruto> 1556.94 && salarioBruto <= 2594.92){
			valorInss = salarioBruto*.09
			salarioBase = salarioBruto-valorInss			
		}else if(salarioBruto> 2594.92 && salarioBruto <= 5189.82){
			valorInss = salarioBruto *.11
			salarioBase = salarioBruto-valorInss			
		}else {
			valorInss = 570.88
			salarioBase = salarioBruto-valorInss					
		}

	// Cálculo do IR
	
	if(salarioBase>1903.98  && salarioBase <= 2826.65){
		valorIr = salarioBase*.075 - 142.80
		salarioLiquido = salarioBase-valorIr		
	}else if(salarioBase>= 2826.66 && salarioBase <= 3751.05){
		valorIr = salarioBase*.15 - 354.80
		salarioLiquido = salarioBase-valorIr		
	}else if(salarioBase> 3751.06 && salarioBase <= 4664.68){
		valorIr= salarioBase *.225 - 636.13
		salarioLiquido = salarioBase-valorIr				
	}else if(salarioBase> 0 && salarioBase < 1903.98){
		valorIr= 0
		salarioLiquido = salarioBase-valorIr				
	}else {
		valorInss = salarioBase *.275 - 869.36
		salarioBase = salarioBase-valorIr		
	}
	return salarioLiquido	
}
console.log("Salário a Receber: " + taxesCalcul(2000))
console.log("Salário a Receber: " + taxesCalcul(3000))
console.log("Salário a Receber: " + taxesCalcul(4200))

module.exports = {
    taxesCalcul
}