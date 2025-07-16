// Connect to the server
const socket = io();

// On connection
socket.on('connect', () => {
  console.log('Connected to server');
});

// Listen for 'message' events from the server
socket.on('message', (msg) => {
  console.log('New message:', msg);
  const li = document.createElement('li');
  li.textContent = msg;
  document.getElementById('messages').appendChild(li);
});

// Send a message to the server
document.getElementById('send').addEventListener('click', () => {
  const message = document.getElementById('message').value;
  socket.emit('message', message);
  document.getElementById('message').value = ''; // Clear the input field
});
