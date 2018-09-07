
const question = document.getElementById("question");
const answer = document.getElementById("answer");
const element = document.getElementById("element");
const sound = document.getElementById("sound");
const sra = document.getElementById("sra");
const One = document.getElementById("One");

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
        question.textContent = random + 1 + "." ;
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
        //sra.textContent = "/"
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
        qanswer.textContent = ""
        answer.textContent = ""
        random = Math.floor(Math.random() * 　a.length);
        qes = a[random].question;
        ans = a[random].answer;
        chars = qes.split("");
        count = 0;
    }
    
});




// function colorchange() {
//     document.body.style.backgroundColor="#808080";
    

// };


// order.addEventListener("click",function(){
//     colorchange();
// });