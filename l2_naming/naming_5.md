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
    purchase: {
        id: 1,
        price: 10000,
        currency: EU,
        owner: {
            id: 1
            first_name: John
            last_name: Doe
        }
    }
}
```