const events = require('events');
const eventEmitter = new events.EventEmitter();

// creating an event handler
const khawkhaw = () => {
  console.log('kuti re asbu na...');
}

// assign the handler into an event
eventEmitter.on('scream', khawkhaw).khawkhaw

// firing the event
eventEmitter.emit('scream');