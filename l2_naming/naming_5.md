# Ex. 5

Transform the previous tables in [](./naming_4.md) into a JSON event sample and add some
dummy values.

Consider that the Vehicle is our root entity, and you may want to nest (anidar) secondary entities.
Add extra fields if you need to, to fully identify the event, one extra depth is ok

----

```json
{
  "brand": "Ford",
  "model": "Focus",
  "identification_number": "33123123N",
  "last_update": "2023-04-05",
  "manufacture": "x",
  "max_speed": "100.3",
  "horse_power": "300"
  "emissions": "1.5"
  "
  "photo": "01001..."
  "owner": {
    "owner_id": 123,
    "age": 45,
    "firstname": "Moisés",
    "lastname": "Carral",
    "vehicle_id": "33123123N"
  }
}
```
