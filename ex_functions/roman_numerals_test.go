package main

import "testing"

type Test struct {
	num_decimal int
	num_roman string
}

var tests = []Test {
	// From ex_roman_numerals.md
	Test{ 1, "I" },
	Test{ 2, "II" },
	Test{ 9, "IX" },
	Test{ 55, "LV" },
	Test{ 432, "CDXXXII" },
	Test{ 3000, "MMM" },
	// From https://en.wikipedia.org/wiki/Roman_numerals
	Test{ 39, "XXXIX" },
	Test{ 246, "CCXLVI" },
	Test{ 789, "DCCLXXXIX" },
	Test{ 2421, "MMCDXXI" },
	Test{ 160, "CLX" },
	Test{ 207, "CCVII" },
	Test{ 1009, "MIX" },
	Test{ 1066, "MLXVI" },
	Test{ 3999, "MMMCMXCIX" },
	Test{ 1776, "MDCCLXXVI" },
	Test{ 1918, "MCMXVIII" },
	Test{ 1944, "MCMXLIV" },
	Test{ 2023, "MMXXIII" },
}

func TestDecimal2Roman(t *testing.T) {
	for _, test := range tests {
		output := decimal2roman(test.num_decimal);
		if output != test.num_roman {
			t.Errorf("%d: Output %q not equal to expected %q", test.num_decimal, output, test.num_roman)
		}
	}
}
