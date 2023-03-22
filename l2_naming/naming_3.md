## Ex.3 

Change the fields for something more readable and coherent

-----

models.User

* username: str
* firstName: str
* lastName: str
* email: str
* password: bytes
* groups: M2M
* usr_perms: M2M
* staff: bool
* is_act: bool
* is_sup: bool
* date_joined: datetime