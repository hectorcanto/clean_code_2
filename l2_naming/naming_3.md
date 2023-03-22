Exercicio 2 Variables

# Ex.1 Change the fields for something more readable and coherent

models.User

login_name: str
first_name: str
last_name: str
email: str
password: bytes
groups: M2M
permissions: M2M
is_staff: bool
is_active: bool
is_supplier: bool
joined_at: datetime




# Ex. 3 (continues 2)
# Transform the previous tables into a JSON event sample and add some dummy values
# Consider that the Vehicle is our root entity
# Add extra fields if you need to, to fully identify the event, one extra depth is ok

{
    brand: Ford
    model: Focus
    id: 33123123N
}
