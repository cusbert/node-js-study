/**
 * event method
 * on = addListener
 * emit
 * once
 * removeAllListeners
 * removeListener
 * off
 * listenerCount
 */
const EventEmitter = require('events');

const myEvent = new EventEmitter();
myEvent.addListener('event1', () => {
    console.log('event 1');
});

myEvent.on('event2', () => {
    console.log('event 2');
});
myEvent.on('event2', () => {
    console.log('event 2 add');
});


myEvent.once('event3', () => {
    console.log('event 3');
});


myEvent.emit('event1'); // 이벤트 1 호출
myEvent.emit('event2'); // 이벤트 2 호출
myEvent.emit('event3'); // 이벤트 3 호출
myEvent.emit('event3'); // 이벤트 3 호출 -> once 라 호출 X

myEvent.once('event4', () => {
    console.log('event 4');
});

myEvent.removeAllListeners('event4');
myEvent.emit('event4'); // 이벤트 4 호출 -> once 라 호출 X

const listenter = () => {
    console.log('event 5');
};

myEvent.on('event5', listenter);
myEvent.removeListener('event5', listenter);
myEvent.emit('event5');

console.log(myEvent.listenerCount('event2'));
