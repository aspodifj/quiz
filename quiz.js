
const question = document.getElementById("question");
const answer = document.getElementById("answer");
const element = document.getElementById("element");
const sound = document.getElementById("sound");
const sra = document.getElementById("sra");
const One = document.getElementById("One");
const square_btn = document.getElementById("square_btn");
const square_btn35 = document.getElementById("square_btn35");
const dss = document.getElementById("dss");



function ring() {
    document.getElementById("sound").play();
}
function ring1() {
    document.getElementById("sound1").play();
}
all.textContent = "all question: " + a.length;


let random = Math.floor(Math.random() * a.length);
let qes = a[random].question;
let ans = a[random].answer;
let chars = qes.split("");
let number = a.indexOf(ans);

let count = 0;
let timeoutid = null;
let index;
let isReading = false;
let isAnswering = false;
let isClicked = false;
const EXTRA_COUNT = 2;
let currentExtra;
let currentIndex;


function tick() {
    if (!isClicked && index <= chars.length - 1) {
        timeoutid = setTimeout(tick, 130);   
        question.textContent +=chars[index];
    } else if (isClicked && currentIndex <= currentExtra){
        timeoutid = setTimeout(tick, 130);
        currentIndex++;
        One.textContent +=chars[index];
    } else if(!isClicked) {
        count = 3;
        element.textContent = "答え"
        isReading = false;
        isAnswering = false;
    } else {
        count = 3;
    }
    index++;
}

element.addEventListener("click", function () {
    count++;


    if (count === 1) {  
        isReading = true;
        isAnswering = true;
        dss.textContent = random + 1 + ":"  ;
        isClicked = false;
        index = 0;
        tick();
        ring();
    } else if (count === 2) {
        currentExtra = Math.floor(Math.random()*(EXTRA_COUNT + 1));
        console.log(currentExtra);
        currentIndex = 0;      
        isClicked = true;
        sra.textContent = "/"
    } else if (count === 3) {
        ring1(); 
        clearTimeout(timeoutid);
        element.textContent = "答え"

    } else if (count === 4) { 
        if (isReading){
        kac.textContent = ")"
        }
        answer.textContent = "A. " + ans;
        element.textContent = "次へ"
        qanswer.textContent = qes.substring(index - 1);
    } else if (count === 5) {
        One.textContent = ""
        sra.textContent = ""
        kac.textContent = ""
        element.textContent = "問題"
        question.textContent = ""
        dss.textContent = ""
        qanswer.textContent = ""
        answer.textContent = ""
        random = Math.floor(Math.random() * 　a.length);
        qes = a[random].question;
        ans = a[random].answer;
        chars = qes.split("");
        count = 0;
    }
    
});
document.getElementById("dss").style.display ="none";

square_btn35.addEventListener("click",function(){
    const dss = document.getElementById("dss");
    if(dss.style.display==="block"){
        dss.style.display="none";
    }else{
        dss.style.display="block";
    }
});


