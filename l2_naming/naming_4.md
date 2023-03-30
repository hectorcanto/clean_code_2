## Ex 4

Add types (SQL or not) to this database table and improve its name to make it more useful
Don't worry about char length or numerical size
Keep in mind, the reader will not know the type or measurement of the variable
if you don't understand some word, look for it in Google

---

Table Vehicle

*   brand: string
*   model: string
*   vin: string
*   updated: datetime

*   manufacture: string
*   max_km_h: numeric
*   cv: numeric
*   co2_emissions: numeric 
*   photo_route: string

Table Owner

*   id: uuid
*   age: int
*   first_name: string
*   last_name: string

Table Purchase

*   id: uuid
*   vehicle_id: string
*   owner_id: string
*   price: numeric
*   currency: string