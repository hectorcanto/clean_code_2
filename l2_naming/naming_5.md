# Ex. 5

Transform the previous tables in [](./naming_4.md) into a JSON event sample and add some
dummy values.

Consider that the Vehicle is our root entity, and you may want to nest (anidar) secondary entities. 
Add extra fields if you need to, to fully identify the event, one extra depth is ok

----

[
    {
        "vehicle": {
            "brand": "Ford",
            "model": "Focus",
            "vehicle_id": "33123123N",
            "last_updated": "2023-03-23T12:00:00Z",
            "manufacture": x,
            "max_speed": 130.0,
            "power": 120.0,
            "emissions": 95.0,
            "photo": "base64",
            "owner": {
                "owner_id": 1,
                "age": 50,
                "first_name": "Michael",
                "last_name": "Jordan",
                "purchase_date": "2021-08-15"
            }
        }
    },
    {
        "vehicle": {
            "brand": "Toyota",
            "model": "Corolla",
            "vehicle_id": "44124124M",
            "last_updated": "2023-03-23T12:00:00Z",
            "manufacture": x,
            "max_speed": 140.0,
            "power": 132.0,
            "emissions": 90.0,
            "photo": "base64",
            "owner": {
                "owner_id": 2,
                "age": 43,
                "first_name": "Juan",
                "last_name": "Pérez",
                "purchase_date": "2022-01-10"
            }
        }
    }
]
