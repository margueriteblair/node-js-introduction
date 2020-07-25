let events = require('events')
//util module allows
let util = require('util');

var myEmitter = new events.EventEmitter(); //this is a constructor function
//events emitter used to create customer events
//similar to event listeners or onclick, etc.
//reacting to an event being emitted on an element

myEmitter.on('someEvent', function(message) {
    console.log(message);
})

myEmitter.emit('someEvent', 'The event was emitted')
//on line 14 we're passing that data straight into the function
//

var Person = function(name) {
    this.name = name;
}

util.inherits(Person, events.EventEmitter);

var james = new Person('James')
var mary = new Person('Mary')
var ryu = new Person('Ryu')
var people = [james, mary, ryu];

people.forEach(function(person){
    person.on('speak', function(message) {
        console.log(person.name + ' said ' + message)
    })
})
james.emit('speak', 'hey dudes');
mary.emit('speak', 'hello world');
ryu.emit('speak', 'I want curry');

