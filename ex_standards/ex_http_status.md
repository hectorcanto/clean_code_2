##  HTTP Status 1

Select the HTTP code from [this page at Mozilla.org](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
for the error list below

Note: ignore 1xx codes (101, 102 ...) and WebDav
Some might ok with 2 options, choose one and justify it.

----

* I cannot access that web if I'm not logged:
  * 401 Unauthorized (_"client request has not been completed because it lacks valid authentication credentials for the requested resource"_)

* I'm logged but I cannot access that page
  * 403 Forbidden (_"insufficient rights to a resource"_)

* The item with that Id was deleted
  * 404 Not Found (_"server cannot find the requested resource"_)
  * 410 Gone (_"access to the target resource is no longer available"_)

* I started uploading, but I have to check another link to see if it is there
  * 303 See Other (_"redirects don't link to the requested resource itself, but to an upload-progress page"_)

* That query parameter is wrong
  * 400 Bad Request (_"malformed request syntax"_)

* There are no resources with that ID
  * 404 Not Found (_"server cannot find the requested resource"_)

* My request was good, but it will take time to resolve
  * 202 Accepted (_"request has been accepted for processing, but the processing has not been completed"_)

* The resource was deleted but no extra info was provided
  * 200 OK (_"request has succeeded"_)
  * 204 No Content (_"The successful result of a DELETE is often not a 200 OK but a 204 No Content"_)

* Added a product to the collection
  * 201 Created (_"request has succeeded and has led to the creation of a resource"_)

Got the info I needed
  * 200 OK (_"request has succeeded"_)



## HTTP Status Ex 2

Select the HTTP verb that is closer to the provided description.
Add any additional explanation if you doubt between 2 options.

* Added some info to my profile
  * PATCH (_"applies partial modifications to a resource"_)
  * PUT (_"replaces a representation of the target resource with the request payload"_)
 
* Checked my profile as it is now
  * GET

* Created a new product
  * POST

* Created several new products
  * POST

* Removed one product
  * DELETE

* Replaced one product by another
  * PUT

* Want to know if the image is there, without downloading it
  * HEAD
