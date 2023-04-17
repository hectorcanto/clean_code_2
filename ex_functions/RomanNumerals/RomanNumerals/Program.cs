
const int EXIT_NUMBER = 0;
const int INVALID_NUMBER = -1;
const int MAX_INPUT_NUMBER = 3000;
string[] unidadesRepo = new string[] { "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX" };
string[] decenasRepo = new string[] { "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC" };
string[] centenasRepo = new string[] { "", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM" };
string[] milesRepo = new string[] { "", "M", "MM", "MM", "", "", "", "", "", "" };

Console.Clear();
Console.WriteLine("Introduzca un número para covertir a número romano, cero o menor para salir");

int inputNumber;
do
{
  Console.Write("Introduzca un número: ");
  var consoleInput = Console.ReadLine();

  if(Int32.TryParse(consoleInput, out inputNumber) || inputNumber <= MAX_INPUT_NUMBER)
  {
    Console.WriteLine(IntToRoman(inputNumber));
  }
  else
  {
    Console.WriteLine("Número no válido");
    inputNumber = INVALID_NUMBER;
  }


} while (inputNumber > EXIT_NUMBER);



string IntToRoman(int num)
{
  int unidades = num % 10;
  int decenas = (num / 10) % 10;
  int centenas = (num / 100) % 10;
  int miles = (num / 1000);

  return $"{milesRepo[miles]}{centenasRepo[centenas]}{decenasRepo[decenas]}{unidadesRepo[unidades]}";
}