const romanNumerals = [
  { value: 1000, numeral: "M" },
  { value: 900, numeral: "CM" },
  { value: 500, numeral: "D" },
  { value: 400, numeral: "CD" },
  { value: 100, numeral: "C" },
  { value: 90, numeral: "XC" },
  { value: 50, numeral: "L" },
  { value: 40, numeral: "XL" },
  { value: 10, numeral: "X" },
  { value: 9, numeral: "IX" },
  { value: 5, numeral: "V" },
  { value: 4, numeral: "IV" },
  { value: 1, numeral: "I" },
];

convertToRomanNumerals = function (value) {
  const lowerLimit = 1;
  const upperLimit = 3999;
  let output = "";

  if (value < 1 || value > upperLimit) {
    throw new Error(
      `Invalid input ${value}. Please enter a number between ${lowerLimit} and ${upperLimit}.`
    );
  }

  romanNumerals.forEach((numeral) => {
    while (value >= numeral.value) {
      output += numeral.numeral;
      value -= numeral.value;
    }
  });

  return output;
};

/*
// Some tests

try {
  console.log(convertToRomanNumerals(0));
} catch (e) {
  console.error(e.message);
}

try {
  console.log(convertToRomanNumerals(5000));
} catch (e) {
  console.error(e.message);
}

console.log(convertToRomanNumerals(2023));
console.log(convertToRomanNumerals(2949));
*/

const arabicNumerals = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

convertFromRomanNumerals = function (value) {
  let total = 0;
  let previous = 0;
  for (let i = value.length - 1; i >= 0; i--) {
    let current = arabicNumerals[value[i]];
    if (current < previous) {
      total -= current;
    } else {
      total += current;
    }
    previous = current;
  }
  return total;
};

/*
//some tests
console.log(convertFromRomanNumerals("XIV"));
console.log(convertFromRomanNumerals("XXIV"));
console.log(convertFromRomanNumerals("XXIV"));
console.log(convertFromRomanNumerals("MXCIV"));
*/