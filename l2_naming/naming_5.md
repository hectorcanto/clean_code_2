# Ex. 5

Transform the previous tables in [](./naming_4.md) into a JSON event sample and add some
dummy values.

Consider that the Vehicle is our root entity, and you may want to nest (anidar) secondary entities. 
Add extra fields if you need to, to fully identify the event, one extra depth is ok

----

```json
{
    id: 1233122
    brand: "Honda"
    model: "Civic"
    updatedAt: "02-03-2023"
    createdAt: "01-03-2023"
    manufactured: "Japan"
    maxSpeed: 200
    power: 100
    emissions: "Eco"
    photoPath: "dir/photo1.jpg"
    owner:{
        id: 121322,
        age: 23
        firstName: "Emilio"
        lastName: "Chica"
        purcharseAt: "01-02-2023"
    }
}
