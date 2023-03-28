# Ex. 5

Transform the previous tables in [](./naming_4.md) into a JSON event sample and add some
dummy values.

Consider that the Vehicle is our root entity, and you may want to nest (anidar) secondary entities. 
Add extra fields if you need to, to fully identify the event, one extra depth is ok

----

{
    brand: Ford
    model: Focus
    identifier: 33123123N
    modification_date: "2020-01-01"
    production_date: "2019-01-01"
    max_speed: 200
    power: 100
    emissions: 100
    photo: "https://www.ford.com/..."

    vehicle_owner: {
        identifier: "12345678A"
        age: 30
        first_name: "paul"
        last_name: "smith"
        purchase_date: "2020-01-01"
    }



}