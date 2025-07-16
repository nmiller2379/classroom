const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

const path = require("path");

// Use the 'public' directory to serve static files
app.use(express.static('public'));

// Root route
app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

// Server our HTML page
app.get("/html", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
