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
