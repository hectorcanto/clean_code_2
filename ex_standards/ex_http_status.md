##  HTTP Status 1

Select the HTTP code from [this page at Mozilla.org](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
for the error list below

Note: ignore 1xx codes (101, 102 ...) and WebDav
Some might ok with 2 options, choose one and justify it.

----

* I cannot access that web if I'm not logged:
  401 Unauthorized.

* I'm logged but I cannot access that page
  403 forbidden

* The item with that Id was deleted
  200 OK

* I started uploading, but I have to check another link to see if it is there
  206 Partial Content

* That query parameter is wrong
  400 bad request

* There are no resources with that ID
  404 Not found

* My request was good, but it will take time to resolve
  202 Accepted

* The resource was deleted but no extra info was provided
  204 Not content

* Added a product to the collection
  201 Created

Got the info I needed
  200 Ok



## HTTP Status Ex 2

Select the HTTP verb that is closer to the provided description.
Add any additional explanation if you doubt between 2 options.

* Added some info to my profile
  POST
 
* Checked my profile as it is now
  GET

* Created a new product
  POST

* Created several new products
  POST

* Removed one product
  DELETE

* Replaced one product by another
  PUT, PATCH (if the resource is not completely different)

* Want to know if the image is there, without downloading it
  GET