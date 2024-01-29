// Desafio 8
function formatPhoneNumber(telNumber) {
    if (!Array.isArray(telNumber) || telNumber.length !== 11) {
        return "Array deve conter exatamente 11 números";
      }
    
      const [firstPart, middlePart, lastPart] = [
        telNumber.slice(0, 2).join(""),
        telNumber.slice(2, 7).join(""),
        telNumber.slice(7).join(""),
      ];
    
      const formattedNumber = `(${firstPart}) ${middlePart}-${lastPart}`;
      return formattedNumber;
}

const phoneNumberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1];
const formattedPhoneNumber = formatPhoneNumber(phoneNumberArray);
console.log(formattedPhoneNumber);


module.exports = {
    formatPhoneNumber
}