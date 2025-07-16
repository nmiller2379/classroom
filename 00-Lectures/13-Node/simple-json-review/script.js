// *** What is an API? ***

// API stands for Application Programming Interface.

// It allows different software applications to communicate and interact with each other.

// APIs define the methods and rules for how different components of software systems should interact.

// Web APIs: Allows communication over the internet using HTTP(S) protocols.

// *** What are HTTP(S) protocols? ***
// HTTP stands for Hypertext Transfer Protocol. It is an application protocol used for transmitting hypermedia documents, such as HTML, over the World Wide Web. HTTP is the foundation of data communication on the web and enables communication between clients (e.g., web browsers) and servers (e.g., web servers). It is a stateless protocol, meaning each request and response pair is independent and does not retain any information about previous interactions.

// HTTP defines several methods (also known as HTTP verbs) that indicate the desired action to be performed on the requested resource. The most commonly used HTTP methods in the context of a RESTful API are:

// GET: Used to retrieve data from the server. It should not modify the server's data or have any side effects.

// POST: Used to submit data to the server to create a new resource. It can also be used to perform operations that cause side effects on the server.

// PUT: Used to update an existing resource on the server. It replaces the entire resource with the new representation.

// PATCH: Similar to PUT, but used to apply a partial update to the resource. It only modifies the specified fields.

// DELETE: Used to delete a resource from the server.

// HEAD: Similar to GET, but only retrieves the headers and not the actual content of the resource.

// OPTIONS: Used to retrieve the communication options available for the target resource.

// In a RESTful API, the HTTP methods are used to interact with resources (entities) exposed by the API. Each resource is identified by a unique URL (Uniform Resource Locator). When a client wants to interact with a resource, it sends an HTTP request to the corresponding URL with the appropriate HTTP method.

// Here's how the HTTP methods interact with a REST API:

// GET: The client sends a GET request to the server's endpoint to retrieve the resource's representation (data). For example, requesting the details of a specific user by sending a GET request to /users/1.

// POST: The client sends a POST request to the server's endpoint to create a new resource. For example, adding a new item to a to-do list by sending a POST request to /tasks with the task details in the request body.

// PUT: The client sends a PUT request to update an existing resource. For example, updating the details of a user by sending a PUT request to /users/1 with the updated user information.

// PATCH: Similar to PUT, but used for partial updates. The client sends a PATCH request with only the fields that need to be updated.

// DELETE: The client sends a DELETE request to remove a resource. For example, deleting a specific task by sending a DELETE request to /tasks/2.

// The server processes each HTTP request according to the method and URL, performs the necessary actions, and sends back an HTTP response to the client. The response contains the requested data or a status code indicating the success or failure of the request. In a REST API, the response is often in JSON format, but it can be in other formats like XML as well.

// By following the principles of REST and using standard HTTP methods, RESTful APIs create a uniform and predictable interface for interacting with resources, making it easier to develop and maintain web applications.

// *** What is a REST (or RESTful) API? ***

// REST stands for Representational State Transfer.

// It is an architectural style for designing networked applications.

// RESTful APIs are commonly used in web development for communication between client and server.

// Request and Response: Communication occurs through HTTP requests and responses.

// Stateless: Each request from the client to the server must contain all the necessary information.


// *** What is JSON? ***

// JSON: Stands for JavaScript Object Notation

// Lightweight data-interchange format

// Designed to be easy to read and write for both humans and machines

// Commonly used for transmitting data between a server and a web application, as well as storing configuration data

// Consists of key-value pairs

// Keys are always strings

// Values can be strings, numbers, objects, arrays, booleans, or null

// Data is separated by commas

// Objects are enclosed in curly braces {}

// Arrays are enclosed in square brackets []

// We can convert a JSON string into a Javascript object by useing JSON.parse()
const jsonString = '{"name": "John Doe", "age": 30, "isStudent": true}';
const parsedData = JSON.parse(jsonString);

console.log(parsedData.name);      // Output: "John Doe"
console.log(parsedData.age);       // Output: 30
console.log(parsedData.isStudent); // Output: true

// We can also do the reverse. We can use the JSON.stringify() method to turn a JavaScript object into JSON.


const studentInfo = {
    name: "John Doe",
    age: 30,
    isStudent: true
  };
  
  const newJsonString = JSON.stringify(studentInfo);
  console.log(newJsonString);
  // Output: '{"name":"John Doe","age":30,"isStudent":true}'
  

// Most commonly, though, we use JSON to transfer data
// API Data Exchange: Many web APIs use JSON for data exchange between the server and client applications.