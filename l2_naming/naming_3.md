Exercicio 2 Variables

# Ex.1 Change the fields for something more readable and coherent

models.User -> model.User

username: str -> user_name: str
first_name:  str -> first_name: str
lastname: str -> last_name: str
email: str -> 
passwd: bytes -> password: bytes
groups: M2M -> group: [M2M]
usr_perms: M2M -> user_permissions: M2M
staff: bool -> is_staff: bool
is_act: bool -> is_active: bool
is_sup: bool -> is_superuser: bool
date_joined: datetime -> 




# Ex. 3 (continues 2)
# Transform the previous tables into a JSON event sample and add some dummy values
# Consider that the Vehicle is our root entity
# Add extra fields if you need to, to fully identify the event, one extra depth is ok

{
    brand: Ford
    model: Focus
    id: 33123123N

}