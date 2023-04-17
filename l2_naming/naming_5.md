# Ex. 5

Transform the previous tables in [](./naming_4.md) into a JSON event sample and add some
dummy values.

Consider that the Vehicle is our root entity, and you may want to nest (anidar) secondary entities. 
Add extra fields if you need to, to fully identify the event, one extra depth is ok

----

```json
{
    brand: Ford
    model: Focus
    id: 33123123N
}
```
```json
{
    brand: "Seat"
    model: "Ibiza"
    vin: "33123123N"
    lastUpdate: "2019-07-04T13:33:03.969Z"
    manufacturingDate: "2012-01-04T00:00:00.000Z"
    maxSpeedKmh: 210
    horsePower: 75
    emissionsCO2: 0.7548
    photoNameList: ["pic1.jpg", "pic2.jpg", "pic3.jpg"]
}
```
