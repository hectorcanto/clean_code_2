function convertToRoman(decimalNumber){
    const one = 'I';
    const five = 'V';
    const ten = 'X';
    const fifty = 'L';
    const hundred = 'C';
    const fiveHundred = 'D';
    const thousand = 'M';
    
    if(decimalNumber === 0)
    {
    	return '';
    }

    checkNumber(decimalNumber);
    
    const literal = decimalNumber.toString();
    const firstDigit = Number(literal[0]);
 
    switch(literal.length){
        case 1:
            if(decimalNumber < 4){
                return new Array(decimalNumber).fill(one).join('');
            }
            if(decimalNumber == 4){
                return one + five;
            }
            if(decimalNumber < 9){
                return five + convertToRoman(decimalNumber - 5);
            }
            return one + ten;        
        case 2:
            if(firstDigit < 5){
                const rest = decimalNumber - (firstDigit * 10);
                return new Array(firstDigit).fill(ten).concat(convertToRoman(rest)).join('');
            }
            return fifty + convertToRoman(decimalNumber - 50);
        case 3:
            if(firstDigit < 5){
                const rest = decimalNumber  % 100;
                return hundred + convertToRoman(rest);
            }
            if(firstDigit == 9){
                const rest = decimalNumber  % 100;
                return hundred + thousand + convertToRoman(rest);
            }
            return fiveHundred + convertToRoman(decimalNumber - 500);
        case 4:
            const rest = decimalNumber % 1000;
            return new Array(firstDigit).fill(thousand).concat(convertToRoman(rest)).join('');         
    }
}

function checkNumber(decimalNumber){
    if(typeof(decimalNumber) !== 'number')
    {
        throw new Error('Must be a number');
    }
    if(decimalNumber < 0){
        throw new Error('Must be greater than 0');
    }
    if(decimalNumber > 3000){
        throw new Error("Number can't be more than 3000");
    }
}

const numberToConvert1 = 1;
const numberToConvert2 = 32;
const numberToConvert3 = 99;
const numberToConvert4 = 555;
const numberToConvert5 = 932;
const numberToConvert6 = 1532;
const numberToConvert7 = 3000;

console.log(convertToRoman(numberToConvert1));
console.log(convertToRoman(numberToConvert2));
console.log(convertToRoman(numberToConvert3));
console.log(convertToRoman(numberToConvert4));
console.log(convertToRoman(numberToConvert5));
console.log(convertToRoman(numberToConvert6));
console.log(convertToRoman(numberToConvert7));
