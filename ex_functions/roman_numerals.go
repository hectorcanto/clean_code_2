package main

import "fmt"
import "os"
import "sort"
import "strconv"

func decimal2roman(number int) string {
	translation_map := map[int]string { 1000: "M",
					    900: "CM",
					    500: "D",
					    400: "CD",
					    100: "C",
					    90: "XC",
					    50: "L",
					    40: "XL",
					    10: "X",
					    9: "IX",
					    5: "V",
					    4: "IV",
					    1: "I" }

	// This boilerplate is needed in order to traverse the map
	// in reverse order (Golang doesn't have tuple lists?)
	keys := make([]int, 0)
	for k, _ := range translation_map {
		keys = append(keys, k)
	}
	sort.Sort(sort.Reverse(sort.IntSlice(keys)))

	for _, num_decimal := range keys {
		if number >= num_decimal {
			return translation_map[num_decimal] + decimal2roman(number - num_decimal)
		}
	}

	return "";
}

func main() {
	if (len(os.Args)<2) {
		fmt.Println("Usage:", os.Args[0], "<number>")
		os.Exit(1);
	}

	number, err := strconv.Atoi(os.Args[1])
	if err != nil {
		fmt.Println("Error:", os.Args[1], "is not a valid number")
		os.Exit(1);
	}

	if number > 3999 {
		fmt.Println("Error:", "Romans can't count up to", os.Args[1])
		os.Exit(1);
	}

	fmt.Println(decimal2roman(number))
}
