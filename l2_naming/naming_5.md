# Ex. 5

Transform the previous tables in [](./naming_4.md) into a JSON event sample and add some
dummy values.

Consider that the Vehicle is our root entity, and you may want to nest (anidar) secondary entities. 
Add extra fields if you need to, to fully identify the event, one extra depth is ok

----

{
    brand: Ford,
    model: Focus,
    id: 33123123N,
    vin: Ni idea xD,
    updated: 20/05/1998,
    manufacture: 20/06/1998,
    max_speed: 210,
    power: 60,
    emissions: 1.1,
    photo: "assets/images/ford_focus_33123123N.jpg",
    owner: {
        identifier: 12312,
        age: 06/02/1985,
        first: 1,
        last: 100,
        purcharse: true
    }
}