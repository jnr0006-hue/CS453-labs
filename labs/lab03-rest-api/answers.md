1) The expressjs API is more RESTlike because it models resources appropriately with defined URL endpoints. It uses HTTP verbs for functionality at each resource and returns a status code.

2) Purpose of route parameters are to allow you to treat each resource as an independent path. /items/1 and /items/2 are separate resources that can be managed more easily with the API.

3)Each HTTP method does a different thing according to the resource you use it with. We use different methods to impvoe functionality and reduce complexity on the client side when contacting the API.

4) 400 errors mean the request has an error and 404 means the request is okay but no resource is available

5) The openAPI file is the contract that tells a client/user how their requests/parameters/responses will behave without having access to the server files.
