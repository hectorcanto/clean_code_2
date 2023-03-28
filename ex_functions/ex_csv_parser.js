const input_file = "source.csv";
const word_separator = ";";
const line_separator = "\r\n";

const fs = require('fs');

function formatCsv(data){
  let csv_lines = data.trim().split(line_separator)
  let csv_words=csv_lines.map((val)=>val.split(word_separator));
  let column_count=csv_words[0].length;
  let column_width=new Array(column_count).fill(0);

  // get max width for each column 
  for(let i=0; i<csv_lines.length;i++){
    for(let j=0; j<column_count;j++){
      _word_length = csv_words[i][j].length
      if(column_width[j]<_word_length){
        column_width[j]=_word_length
      }
    }
  }

  // render the table
  for(let i=0; i<csv_lines.length;i++){
    let line="|"
    for(let j=0; j<column_count;j++){
      line+=csv_words[i][j].padEnd(column_width[j]+1, ' ').padStart(1, ' ')+"|"
       
    }
    
    console.log(line)
    // add horizontal Line
    if(i==0){
      line="+"
      for(let j=0; j<column_count;j++){
        line+=String("").padEnd(column_width[j]+1, '-')+"+"
      }
      console.log(line)
    }
  }

}

fs.readFile(input_file, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  formatCsv(data)
});


