// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
  constructor() {
    this.events = {};
  }

  // Register an event handler
  on(eventName, callback) {
    // if some value already exists at this.events[eventName], there must already be an array there that we added. we can take this callback and push this callback into that array.
    if (this.events[eventName]) {
      this.events[eventName].push(callback);
      // if there's no value at this place and the obj, we must need to initialize a new array add callback to it. this.events[eventName] contains only callback
    } else {
      this.events[eventName] = [callback];
    }
  }

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName) {
    if (this.events[eventName]) {
      for (let cb of this.events[eventName]) {
        cb();
      }
    }
  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName) {
    delete this.events[eventName];
  }
}

module.exports = Events;
