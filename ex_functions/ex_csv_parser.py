#!/usr/bin/env python3

DEFAULT_INPUT_SEPARATOR = ";"
DEFAULT_OUTPUT_SEPARATORS = { "between_columns": "|", "between_rows": "-", "between_columns_and_rows": "+" }


# Read the input file and transform it into a list of lists
# The outer list contains rows, and the inner lists contain values
def load_input_file(input_file_path: str, input_separator=";") -> list:
    return [ line.rstrip("\n").split(input_separator) for line in open(input_file_path, "r") ]


# Pretty-print a list of lists
def print_output(rows: list, output_separators: list) -> None:
    max_column_lengths = find_max_column_lengths(rows)

    for idx_row, row in enumerate(rows):
        if idx_row==1: # We're assuming the first row is always a header row
            print_separation_row(max_column_lengths, output_separators)

        print_row(row, max_column_lengths, output_separators)


# Print a single line within the table body
def print_row(row: list, max_column_lengths: list, output_separators: dict) -> None:
    for idx_column, column in enumerate(row):
        print(column.ljust(max_column_lengths[idx_column]), end="")
        print(output_separators["between_columns"], end="")
    print()


# Print a separation between the header and the table body
def print_separation_row(max_column_lengths: list, output_separators: dict) -> None:
    for max_column_length in max_column_lengths:
        print(output_separators["between_rows"] * max_column_length, end="")
        print(output_separators["between_columns_and_rows"], end="")
    print()


# Iterate over all the rows in order to find the maximum length of each column
def find_max_column_lengths(rows: list) -> list:
    max_column_lengths = [ 0 ] * max([ len(row) for row in rows ])
    for idx_row, row in enumerate(rows):
        for idx_column, column in enumerate(row):
            max_column_lengths[idx_column] = max(max_column_lengths[idx_column], len(column))
    return max_column_lengths


if __name__ == "__main__":
    import argparse
    parser = argparse.ArgumentParser()
    parser.add_argument('path', help="Input file path")
    parser.add_argument('--separator', default=DEFAULT_INPUT_SEPARATOR, help="Input separator character")
    args = parser.parse_args()

    rows = load_input_file(args.path, args.separator)
    print_output(rows, DEFAULT_OUTPUT_SEPARATORS)
