// Desafio 8
function formatPhoneNumber(telNumber) {
    // Verifica se o array tem tamanho incorreto
    if (telNumber.length !== 11) {
        return 'Array com tamanho incorreto.';
    }

    // Verifica se algum número é menor que 0 ou maior que 9
    for (let i = 0; i < telNumber.length; i++) {
        if (telNumber[i] < 0 || telNumber[i] > 9) {
            return 'Não é possível gerar um número de telefone com esses valores.';
        }
    }

    // Verifica se algum número se repete 3 vezes ou mais
    let counts = {};
    for (let i = 0; i < telNumber.length; i++) {
        counts[telNumber[i]] = (counts[telNumber[i]] || 0) + 1;
        if (counts[telNumber[i]] >= 3) {
            return 'Não é possível gerar um número de telefone com esses valores.';
        }
    }

    // Formata o número de telefone
    const ddd = telNumber.slice(0, 2).join('');
    const prefixo = telNumber.slice(2, 7).join('');
    const sufixo = telNumber.slice(7).join('');
    return `(${ddd}) ${prefixo}-${sufixo}`;
}

// Testes
console.log(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1])); // Saída: (12) 34567-8901
console.log(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // Saída: Array com tamanho incorreto.
console.log(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1])); // Saída: Não é possível gerar um número de telefone com esses valores.
console.log(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, -1, 1])); // Saída: Não é possível gerar um número de telefone com esses valores.
console.log(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 8, 1, 1])); // Saída: Não é possível gerar um número de telefone com esses valores.




module.exports = {
    formatPhoneNumber
}