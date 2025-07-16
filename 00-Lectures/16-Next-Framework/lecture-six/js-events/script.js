const EventEmitter = require('events');
// Create an instance of EventEmitter
const eventEmitter = new EventEmitter();
// Create an event listener
eventEmitter.on('greet', (name) => {
  console.log(`Hello, ${name}!`);
});
// Emit the event
eventEmitter.emit('greet', 'John');

// Remove event listener
eventEmitter.off('greet', listenerFunction);

eventEmitter.once('greet', (name) => {
  console.log(`Hello for the first and last time, ${name}!`);
});


