Charter API
===========

A REST API that delivers the [Canadian Charter of Rights and Freedoms].

REST Server
-----------

__GET__ /rights - _Returns all rights as an array of objects_

__GET__ /rights/:id  - _Returns an individual right as an object_

Todo
----

- Enter remaining rights and freedoms.
- Find best way to serve structured right/freedom in JSON.
  (Currently including HTML).
- Sort out list item 16.1 (it's presented as 17)

License
-------

Licensed MIT. See LICENSE file.

Notice
------

This API is under active development and will break.

  [Canadian Charter of Rights and Freedoms]: http://en.wikipedia.org/wiki/Canadian_Charter_of_Rights_and_Freedoms
