let events = require('events');

let eventEmitter = new events.EventEmitter();

let myHandler = function(){
    console.log("myHandler 1");
    eventEmitter.emit('event2');
}

let myHandler2 = function(){
    console.log("myHandler 2");
}

let myHandler3 = function(){
    console.log("myHandler 3");
}

eventEmitter.on('event4', function () {
    console.log('Welcome to event 4');
})

eventEmitter.on('event5', function (hasPanCard) {
    console.log('has Pan Card ?');
    console.log(hasPanCard);
i = 0;
    eventEmitter.on('event6', function () {
        console.log(i++);
    })
})

eventEmitter.on('event1', myHandler);
eventEmitter.on('event2', myHandler2);
eventEmitter.on('event3', myHandler3);

eventEmitter.once('event7', function () {
    //event 7 will come only once because we used 'once' instead of 'on' in event 7
    console.log('Here comes event 7');
})

eventEmitter.emit('event1');
eventEmitter.emit('event3');
eventEmitter.emit('event4');
eventEmitter.emit('event5', true);
eventEmitter.emit('event6');
eventEmitter.emit('event6');
eventEmitter.emit('event6');
eventEmitter.emit('event6');
eventEmitter.emit('event6');
eventEmitter.emit('event6');
eventEmitter.emit('event6');
eventEmitter.emit('event7');     //event 7 will come only once because we used 'once' instead of 'on' in event 7
eventEmitter.emit('event7');
eventEmitter.emit('event7');