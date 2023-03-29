const file=`Name;Street;City;Age
Peter Pan;Am Hang 5;12345 Einsam;42
Maria Schmitz;Kölner Straße 45;50123 Köln;43
Paul Meier;Münchener Weg 1;87654 München;65`;

function csvParser(file, separator, spaceBefore, spaceAfter){
    if(typeof(file) != "string"){
        throw Error("Insert file as string");
    }

    const rows = file.split(separator).map((line,index) => {
        const columns = parseLine(line);
        if(index == 0){
            return columnsToHeader(columns, spaceBefore, spaceAfter);
        }
        return columnsToRow(columns, spaceBefore, spaceAfter);
    });

    return rows.join('<br>\r\n');
}

function columnsToHeader(columns, spaceBefore, spaceAfter){
    let columnsHeader = columns.map(c => new Array(spaceBefore).join(' ') + c + new Array(spaceAfter).join(' '));
    let columnsLengths = columnsHeader.map(c => c.length);
    let separatorHeader = columnsToSeparatorHeader(columnsLengths); 
    return columnsHeader.join('|') + '<br>\r\n' + separatorHeader + '<br>\r\n';
}

function columnsToSeparatorHeader(columnsLengths){
    let separatorHeader = '';
    columnsLengths.forEach(c => {
        separatorHeader += new Array(c).join('-')+'+';
    });
    return separatorHeader;
}

function columnsToRow(columns, spaceBefore, spaceAfter){
    return columns.map(c => new Array(spaceBefore).join(' ') + c + new Array(spaceAfter).join(' ')) + '<br>\r\n';
}

function parseLine(line, separator){
    if(typeof(line) != "string"){
        throw Error("line must be string");
    }
    return line.split(separator);
}

console.log(csvParser(file, "\r\n", 0, 10));