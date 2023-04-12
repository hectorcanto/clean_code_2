function decimalToRoman(num) {
    const decimalValues = [
      1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1
    ];
    const romanNumerals = [
      "M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"
    ];
    
    let roman = "";
    
    if (num < 1 || num > 3000) {
      return "Número inválido. Debe ser un número entre 1 y 3000.";
    }
    
    for (let i = 0; i < decimalValues.length; i++) {
      while (num >= decimalValues[i]) {
        roman += romanNumerals[i];
        num -= decimalValues[i];
      }
    }
    
    return roman;
}

const numberToConvert1 = 1;
const numberToConvert2 = 32;
const numberToConvert3 = 99;
const numberToConvert4 = 555;
const numberToConvert5 = 1532;
const numberToConvert6 = 3000;

console.log(decimalToRoman(numberToConvert1));
console.log(decimalToRoman(numberToConvert2));
console.log(decimalToRoman(numberToConvert3));
console.log(decimalToRoman(numberToConvert4));
console.log(decimalToRoman(numberToConvert5));
console.log(decimalToRoman(numberToConvert6));
