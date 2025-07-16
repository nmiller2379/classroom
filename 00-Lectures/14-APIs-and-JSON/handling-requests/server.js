const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const path = require("path");

// Using middleware to make a simple request logger
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Middleware to parse the body
app.use(express.urlencoded({ extended: true }));

// Root route
app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

app.get("/html", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Serve json with res.json
app.get("/data", (req, res) => {
  res.json({ message: "Hello, JSON!" });
});

// Route parameters
app.get("/user/:username", (req, res) => {
  const username = req.params.username;
  res.send(`Hello, ${username}!`);
});

// Query parameters
app.get("/search", (req, res) => {
  const query = req.query.q;
  res.send(`You searched for: ${query}`);
});

// Post route to handle submissions from the form
app.post("/submit", (req, res) => {
  // Access form data from req.body
  const { name } = req.body; // Get the 'name' input from the form
  res.send(`Received submission: ${name}`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
