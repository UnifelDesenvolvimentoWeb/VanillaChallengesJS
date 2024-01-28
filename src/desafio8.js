// Desafio 8
function formatPhoneNumber ( telNumber )
{
    if ( telNumber.length !== 11 )
    {
        return 'Array com tamanho incorreto.';
    }

    for ( let index = 0; index < telNumber.length; index++ )
    {
        if ( telNumber[ index ] < 0 || telNumber[ index ] > 9 || telNumber.filter( num => num === telNumber[ index ] ).length >= 3 )
        {
            return 'não é possível gerar um número de telefone com esses valores';
        }
    }

    // Usando métodos slice e join "https://www.w3schools.com/js/js_array_methods.asp#mark_join" & "https://www.w3schools.com/js/js_array_methods.asp#mark_slice"
    
    const formattedNumber = `(${ telNumber.slice( 0, 2 ).join( '' ) }) ${ telNumber.slice( 2, 7 ).join( '' ) }-${ telNumber.slice( 7 ).join( '' ) }`;
    return formattedNumber;
}

module.exports = {
    formatPhoneNumber
}
