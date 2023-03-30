const input_file = "source.csv";
const word_separator = ";";
const line_separator = "\n" //"/\r?/\n";
const fs = require('fs');

function printCsv(data) {
  let csv_lines = data.trim().split(line_separator)
  let csv_words = csv_lines.map((val) => val.split(word_separator));
  let column_width = getColumnsWidth(csv_lines, csv_words);

  renderRows(csv_lines, csv_words, column_width);
}

function getColumnsWidth(csv_lines, csv_words) {
  let column_count = csv_words[0].length;
  let column_width = new Array(column_count).fill(0);

  for (let i = 0; i < csv_lines.length; i++) {
    for (let j = 0; j < column_count; j++) {
      _word_length = csv_words[i][j].length
      if (column_width[j] < _word_length) {
        column_width[j] = _word_length
      }
    }
  }
  return column_width;
}

function renderRows(csv_lines, csv_words, column_width) {
  let column_count = csv_words[0].length;

  const END_COLUMN_GAP = 1;
  for (let i = 0; i < csv_lines.length; i++) {
    let line = "|"
    for (let j = 0; j < column_count; j++) {
      line += csv_words[i][j].padEnd(column_width[j] + END_COLUMN_GAP, ' ').padStart(1, ' ') + "|"
    }

    if (i == 0) {
      line += renderHorizontalLine(column_count, column_width, END_COLUMN_GAP)
    }

    console.log(line)
  }
}

function renderHorizontalLine(column_count, column_width, END_COLUMN_GAP) {
  let line = "\n+"
  for (let j = 0; j < column_count; j++) {
    line += String("").padEnd(column_width[j] + END_COLUMN_GAP, '-') + "+"
  }
  return line;
}

fs.readFile(input_file, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  printCsv(data)
});
