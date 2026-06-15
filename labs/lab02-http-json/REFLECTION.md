1) What is the difference between a TCP message and an HTTP request?
	A TCP message is at the transport layer(4) and you have MORE control over how to handle the data; however, you have to do MORE work at that layer to work with the data.

2) What does the Content-Type: application/json header tell the server?
	You should be expecting JSON structured data

3) Why should a server return different HTTP status codes for different situations?
	If you dont let the client know how they've made a mistake, they will continue to make that mistake, if you give them information on how to repair their mistake, they can repair the mistake without bothering you (they will bother you anyway)

4) What happens if the client sends invalid JSON?
	We have to ensure we handle checks for invalid JSON at the reciever, they will get a 400 level error for bad request

5) How is this lab different from Lab 1?
	This lab is different from Lab 1 slightly in the layer we worked on and in the fact that we were dealing more with entire serialized JSON messages and not working line by line, we're working with more data, with more standardized structure, and less overall control overall. Similar results in that theres still a server and a client and they still pass data back and forth.
