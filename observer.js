class Observer {
    constructor() {
        // { eventName: [subscriber, subscriber, ...], ... }
        this.subscribers = {};
    }
    subscribe(eventName, subscriber) {
        if (!this.subscribers[eventName]) this.subscribers[eventName] = [];
        this.subscribers[eventName].push(subscriber);
    }
    publish(eventName, ...params) {
        if (this.subscribers[eventName]) {
        console.log(this.subscribers);
            for (let subscriber of this.subscribers[eventName]) {
            subscriber(...params); 
        }
        }
    }
    }
const observer = new Observer();


    