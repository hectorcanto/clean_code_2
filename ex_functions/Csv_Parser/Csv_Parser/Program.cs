

using Csv_Parser.Model;
using Csv_Parser.Services;

const int FIRST_LINE = 1;
const string CHARACTER_SEPARATOR = ";";

string rawCSV = RepositoryService.GetRawCSV();

string[] csvLines = rawCSV.Split(new string[] { Environment.NewLine }, StringSplitOptions.None);

Table table = new Table(csvLines.First().Split(new string[] { CHARACTER_SEPARATOR }, StringSplitOptions.None));

foreach (var csvRow in csvLines.Skip(FIRST_LINE))
{
  table.AddRow(csvRow.Split(new String[] { CHARACTER_SEPARATOR }, StringSplitOptions.None));
}

Console.Clear();

table.Print();


Console.WriteLine();

Console.WriteLine("Fin");


