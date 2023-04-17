# Csv table-izer Kata curso Clean Code

Aplicacion consola realizada con DotNet core.  
muestra los datos de un CSV

## Installation

es necesario tener instalado .NET Core  
[Instalación Linux](https://learn.microsoft.com/en-us/dotnet/core/install/linux)  
[Instalacion Windows](https://learn.microsoft.com/en-us/dotnet/core/install/windows?tabs=net70)  


## Usage
en la carpeta  donde se encuentra el archivo de proyecto *.csproj ejecutar:  
```bat
dotnet run Ex_Functions.csproj 
```
## Output
ejemplo de salida
```bat
+---------------+------------------+---------------+-----+
| Name          | Street           | City          | Age |
+---------------+------------------+---------------+-----+
| Peter Pan     | Am Hang 5        | 12345 Einsam  |  42 |
| Maria Schmitz | Kölner Straße 45 | 50123 Köln    |  43 |
| Paul Meier    | Münchener Weg 1  | 87654 München |  65 |
+---------------+------------------+---------------+-----+ 
```
## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)