namespace Csv_Parser.Services
{
  public class RepositoryService
    {
        public static string GetRawCSV()
        {
            return @"Name;Street;City;Age
Peter Pan;Am Hang 5;12345 Einsam;42
Maria Schmitz;Kölner Straße 45;50123 Köln;43
Paul Meier;Münchener Weg 1;87654 München;65";
        }
    }
}
