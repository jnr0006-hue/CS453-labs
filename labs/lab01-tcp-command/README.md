# Lab 1 - TCP Command Server

## Protocol Description

|Command               |Description            |Input          |Output
|----------------------|-----------------------|---------------|-----------------------------------------
|ECHO                  |echos input            |ECHO hello     |hello
|UPPER                 |uppercases input       |UPPER hello    |HELLO
|LOWER                 |lowercases input       |LOWER HELLO    |hello
|REVERSE               |reverses input         |REVERSE HELLO  |OLLEH
|TIME                  |shows server time      |TIME           |datetime format of current server time
|EASTEREGG             |prints an egg          |EASTEREGG      |ASCII art of an easter egg
|QUIT                  |closes connection      |QUIT           |connection information and quit message


## Reflection Question Answers

1. What is the difference between the client and the server?
- The client sends requests to be accepted while the server processes them.


2. Why does the server need to keep running after handling one request?
- In the event that your client wants to perform multiple requests or you have multiple clients who all want to perform a request. This prevents you from having to start the server every time someone wants to connect from a client.

3. What happens if two clients connect at the same time?
- The server itself creates a separate internal port for each client connection. Outwardly they are using port 3000 or whichever port is specified during startup; however, inwardly they are using assigned internal ports.

4. How is this different from HTTP?
- HTTP has had DECADES of work behind it, its standardized, its functional and the entire world uses it.
