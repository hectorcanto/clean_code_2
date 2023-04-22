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

Table Vehicle

*   brand (Char)
*   model (Char)
*   vin (Char)
*   updated_at (Datetime)

*   manufacture  # Ni idea a que se refiere sin más contexto
*   max_speed (Float)
*   power  # Ni idea a que se refiere sin más contexto
*   emission_percent (Float)
*   image (Binary)
*   owner_id (M2O)

Table Owner

*   id (Int)
*   age (Int)
*   first_name (Char) 
*   last_name (Char)
*   is_purcharse (Bool)

[
	{
		'brand': 'Ford', 
		'model': 'Focus', 
		'vin': '33123123N', 
		'updated_at': '2022-01-10 12:00:00', 
		'max_speed': 195.52, 
		'emission_rate': 18.05, 
		'image': XXXXX,
		'owner_id: {'id': 1, 'age': 32, 'first_name': 'Pepito', 'last_name': 'De los rios', 'is_purcharse': True},
	}, 
	{...},
]






