# User Stories for MERN Application
This activity will give you practice with the MERN stack. Work in the `mern-template` to complete this activity. It is done when the user stories are fulfilled.

HINT: Because you will server your frontend on localhost:3000 and your backend on localhost:8080, or whatever port you choose for your API server you will need to handle Cross-Origin Resource Sharing, a security feature implemented in web browsers to control how resources are requested from different origins. To do this, we'll use a third-party node module called cors. It will be more middleware in our Express.js server. You'll use it like this:
```
const cors = require("cors");
app.use(cors());

```

## Form Input and Validation

- As a user, I want to see a form with inputs for first name, last name, and age on the home page ("/") so that I can enter my information.
- As a user, I want the first name, last name, and age inputs to be required so that I do not accidentally submit incomplete information.
- As a user, I want to receive an error message if I try to submit the form without filling in all required fields so that I know what needs to be corrected.

## Submitting the Form

- As a user, I want to be able to enter my first name, last name, and age in the form and click a "Submit" button so that I can submit my information.
- As a user, I want my information to be saved in the database when I click the "Submit" button so that it is stored securely.
- As a user, I want the form to clear after a successful submission so that I can enter new information without manually clearing the fields.

## Viewing Saved Data

- As a user, I want to navigate to a "/people" page using a link or button so that I can see a list of all people who have submitted their information.
- As a user, I want to see the list of people displayed with their full name (first name + last name) and age so that I can easily identify and view their details.
- As a user, I want the list of people on the "/people" page to be updated dynamically so that I'm always viewing the most up-to-date data on the page.