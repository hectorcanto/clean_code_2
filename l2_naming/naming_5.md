# Ex. 5

Transform the previous tables in [](./naming_4.md) into a JSON event sample and add some
dummy values.

Consider that the Vehicle is our root entity, and you may want to nest (anidar) secondary entities. 
Add extra fields if you need to, to fully identify the event, one extra depth is ok

----
{
  "vehicule": [{
    "brand": "Citroen",
    "model": "2CV",
    "attributes": {
      "vin_code": "#FF5733 ",
      "commercialized_at": "1972-05-22",
      "manufacture_city": "VIGO",
      "maximum_speed_kmH": 75.0,
      "horse_power": 28,
      "emissions": "250_GR_CO2/KM"
    },
    "owner": {
        "identifier_number": "h567k",
        "born_date": "1972-05-22",
        "first_name": "Bienvenido",
        "last_name": "Conductor",
        "purcharse_at": "2015-05-22T14:56:28.000Z"
    }
  }]
}