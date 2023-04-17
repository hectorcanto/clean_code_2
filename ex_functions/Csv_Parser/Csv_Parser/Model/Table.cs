using System.Text;

namespace Csv_Parser.Model
{
  public class Table
  {
    private const string START_BAR = "| ";
    private const string END_BAR = "|";
    private const string DASH = "-";
    private const string START_CORNER = "+-";
    private const string END_CORNER = "+";
    private const string SPACE = " ";

    private readonly string[] titles;
    private readonly List<int> lengths;
    private readonly List<string[]> rows = new List<string[]>();

    public Table(params string[] titles)
    {
      this.titles = titles;
      lengths = titles.Select(t => t.Length).ToList();
    }
    public void AddRow(params object[] row)
    {
      if (row.Length != titles.Length)
        throw new Exception($"La fila no tiene las mismas columnas que la cabecera [{row.Length}]");

      rows.Add(row.Select(o => o.ToString()).ToArray());

      for (int i = 0; i < titles.Length; i++)
      {
        if (rows.Last()[i].Length > lengths[i])
        {
          lengths[i] = rows.Last()[i].Length;
        }
      }
    }


    public void Print()
    {

      PrintDashedLine();

      PrintHeaders();

      PrintDashedLine();

      PrintRows();

      PrintDashedLine();

    }

    private void PrintRows()
    {
      StringBuilder line = new StringBuilder();
      foreach (var row in rows)
      {
        line.Clear();
        for (int i = 0; i < row.Length; i++)
        {

          if (int.TryParse(row[i], out _))
          {
            line.Append(START_BAR);
            line.Append(row[i].PadLeft(lengths[i]));
            line.Append(SPACE); 
          }
          else
          {
            line.Append(START_BAR); 
            line.Append(row[i].PadRight(lengths[i]));
            line.Append(SPACE);
          }
        }
        line.Append(END_BAR);
        Console.WriteLine(line.ToString());
      }
    }

    private void PrintHeaders()
    {
      StringBuilder line = new StringBuilder();
      for (int i = 0; i < titles.Length; i++)
      {
        line.Append(START_BAR);
        line.Append(titles[i].PadRight(lengths[i]));
        line.Append(SPACE);
      }
      line.Append(END_BAR);
      Console.WriteLine(line.ToString());
    }

    private void PrintDashedLine()
    {
      foreach (var length in lengths)
      {
        Console.Write(START_CORNER 
                      + String.Concat(Enumerable.Repeat(DASH, length))
                      + DASH );
      }

      Console.WriteLine(END_CORNER);
    }
  }


}
