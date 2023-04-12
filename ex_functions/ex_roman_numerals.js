convertFromRomanNumerals = function (value) {
  const arabicNumerals = {
    I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000,
  };
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


//console.log(convertFromRomanNumerals("XIV"));
//console.log(convertFromRomanNumerals("XXIV"));
//console.log(convertFromRomanNumerals("XXIV"));
//console.log(convertFromRomanNumerals("MXCIV"));



convertToRomanNumerals = function (value) {
  const lowerLimit = 1;
  const upperLimit = 3999;
  const alphabet = [
    "M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I",
  ];
  const romanNumerals = {
    M: { value: 1000, numeral: "M" }, CM: { value: 900, numeral: "CM" },
    D: { value: 500, numeral: "D" }, CD: { value: 400, numeral: "CD" },
    C: { value: 100, numeral: "C" }, XC: { value: 90, numeral: "XC" },
    L: { value: 50, numeral: "L" }, XL: { value: 40, numeral: "XL" },
    X: { value: 10, numeral: "X" }, IX: { value: 9, numeral: "IX" },
    V: { value: 5, numeral: "V" }, IV: { value: 4, numeral: "IV" },
    I: { value: 1, numeral: "I" },
  };

  let output = "";

  if (value < 1 || value > upperLimit) {
    throw new Error(
      `Invalid input ${value}. Please enter a number between ${lowerLimit} and ${upperLimit}.`
    );
  }

  alphabet.forEach((numeral) => {
    while (value >= romanNumerals[numeral].value) {
      output += romanNumerals[numeral].numeral;
      value -= romanNumerals[numeral].value;
    }
  });

  return output;
};

/*
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
