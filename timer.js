class Timer{
    constructor(){
        observer.subscribe("startQuestion", this.startTimer);
        
    }
    startTimer(){console.log("s")}

}
const timer = new Timer();