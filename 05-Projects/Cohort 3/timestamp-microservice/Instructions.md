# User Stories for Timestamp Microservice Project
Working in a copy of your `express-template`, complete this project by fulfilling the user stories below. HINTS: This project involves manipulating data from the Date object. If you need help with the data, be sure to consult MDN. If your implementing the extra credit user story, be aware that error handling middleware is different than other kinds of middleware. For more information, go to https://expressjs.com/en/guide/using-middleware.html#middleware.error-handling

1. **Set Up Express Server and Serve an HTML Page**
   - **As a developer,** I want to set up a basic Express server that listens on a specified port and serves an HTML page at the root URL (`/`), **so that** users can access a basic homepage with information about the API.
   - **Acceptance Criteria:**
     - The server should start without errors and listen on a port specified in an environment variable or default to port 8080.
     - When a user visits the root URL (`/`), the server should respond with an HTML page that provides a brief description of the Timestamp Microservice API, including example usage and endpoints.
     - The HTML page should be served using Express's static file middleware or by using the `res.sendFile()` method to serve the file directly.

2. **Create a GET Endpoint for Timestamp Conversion**
   - **As a user,** I want to send a GET request to the endpoint `/api/:date?`, **so that** I can receive a JSON response containing the Unix timestamp and UTC date.
   - **Acceptance Criteria:**
     - The endpoint `/api/:date?` should accept both Unix timestamps and date strings formatted as YYYY-MM-DD.
     - If the input is a valid Unix timestamp or date string, the response should include the date in both Unix and UTC formats.

3. **Return JSON Response for Valid Dates**
   - **As a user,** when I provide a valid Unix timestamp or date string to the endpoint, **I want** to receive a JSON response containing both the Unix timestamp and UTC format of the date, **so that** I can verify the conversion is correct.
   - **Acceptance Criteria:**
     - The response should be in JSON format.
     - The JSON response should contain two fields: `unix` and `utc`.
     - Example Response for valid input:
       ```json
       { "unix": 1451001600000, "utc": "Fri, 25 Dec 2015 00:00:00 GMT" }
       ```

4. **Handle Current Date When No Date is Provided**
   - **As a user,** when I send a request to the endpoint without a date parameter, **I want** the current date and time to be returned in both Unix and UTC formats, **so that** I can get the current timestamp.
   - **Acceptance Criteria:**
     - If no date is provided in the request, the response should include the current timestamp in Unix and UTC formats.
     - Example Response when no date is provided:
       ```json
       { "unix": <current-timestamp>, "utc": "<current-utc-date-string>" }
       ```

5. **Return Error for Invalid Dates**
   - **As a user,** when I provide an invalid date string or timestamp, **I want** to receive a JSON response with an error message, **so that** I know the input was not recognized as a valid date.
   - **Acceptance Criteria:**
     - If the input is not a valid Unix timestamp or date string, the response should include an error message.
     - Example Error Response:
       ```json
       { "error": "Invalid Date" }
       ```

6. **Implement Middleware for Logging and Error Handling (extra credit)** 
   - **As a developer,** I want to use middleware to log incoming requests and handle errors gracefully, **so that** the server is easier to debug and maintain.
   - **Acceptance Criteria:**
     - Middleware should log all incoming requests with their method and endpoint.
     - Middleware should catch errors and return appropriate error responses without crashing the server.
