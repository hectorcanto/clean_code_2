# Ex. 5

Transform the previous tables in [](./naming_4.md) into a JSON event sample and add some
dummy values.

Consider that the Vehicle is our root entity, and you may want to nest (anidar) secondary entities. 
Add extra fields if you need to, to fully identify the event, one extra depth is ok

----

```json
{
    date: "2023-03-22 19:06"
    description: "Vehicle stolen"
    level: "warning"

    vehicle: {
        manufacturer: "Ford"
        brand: "Ford"
        model: "Focus"
        vin: "33123123N"

        updated_at: "2020-01-01 00:00"
        purchased_at: "2023-01-01 00:00"

        max_speed_kmh: 258
        power_hp: 105
        emissions_co2_gkm: 139
  
        photo_filepath: "/srv/storage/photos/d9fd12a0-458c-4587-8fe1-a118c3888101.png"

        owner: {
              fiscal_id_number: "X12345678A"
              fiscal_id_type: "NIE"
              birthday: "1999-01-01 00:00"
              first_name: "John"
              last_name: "Doe"
        }
    }
}
```