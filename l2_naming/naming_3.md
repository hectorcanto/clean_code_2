## Ex.3 

Change the fields for something more readable and coherent

-----

models.User

* username: str => UserName
* first_name: str => FirstName
* lastname: str => LastName
* email: str => EmailAddress
* passwd: bytes => EncriptedPassword
* groups: M2M
* usr_perms: M2M
* staff: bool => IsStaff
* is_act: bool  => IsActive
* is_sup: bool  => 
* date_joined: datetime => RegistrationDate
