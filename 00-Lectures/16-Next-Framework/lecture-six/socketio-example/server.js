// server.js

const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

// Create an Express application
const app = express();

// Create an HTTP server and attach the Express app to it
const server = http.createServer(app);

// Attach Socket.io to the server
const io = new Server(server);

// Serve static files from the public directory
app.use(express.static('public'));

// Define a route for the root URL
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Listen for client connections on Socket.io
io.on('connection', (socket) => {
  console.log('A user connected');

  // Listen for a 'message' event from the client
  socket.on('message', (msg) => {
    console.log(`Message received: ${msg}`);
    // Broadcast the message to all connected clients
    io.emit('message', msg);
  });

  // Handle client disconnection
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

// Start the server on port 3000
server.listen(8080, () => {
  console.log('Server is running on http://localhost:8080');
});
