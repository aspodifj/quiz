class MainButton {
    constructor(){
        this.element = document.getElementById("element");
        //this.element.addEventListener("element");
        this.element.addEventListener("click",this.click.bind(this));
        this.count = 0;
    } 
    click(){
        this.count++
        switch(this.count) {

            case 1:
            observer.publish("startQuestion");
            break;
            case 2:
            observer.publish("stopQuestion");
            break;
            case 3:
            observer.publish("showAnswer");
            break;
            case 4:
            observer.publish("nextQuestion");
            break;

        }
    }
} 
const mainButton = new MainButton();

