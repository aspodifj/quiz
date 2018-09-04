
const question = document.getElementById("question");
const answer = document.getElementById("answer");
const element = document.getElementById("element");
const sound = document.getElementById("sound");
const sra = document.getElementById("sra");
function ring() {
    document.getElementById("sound").play();
}
function ring1() {
    document.getElementById("sound1").play();
}
all.textContent = "all question: " + a.length;


let random = Math.floor(Math.random() * 　a.length);
let qes = a[random].question;
let ans = a[random].answer;
let chars = qes.split("");
let number = a.indexOf(ans);

let count = 0;
let timeoutid = null;
let isRunning = false;
let index;

function tick() {
    question.textContent +=chars[index];
    if (index < chars.length - 1) {
        timeoutid = setTimeout(tick, 130);
    } else {
        count = 2;
        element.textContent = "答え"
    }
    index++;
}

element.addEventListener("click", function () {
    count++;
    if (count === 1) {  
        question.textContent = random + 1 + "." ;
        index = 0;
        tick();
        ring();
    } else if (count === 2) {
        ring1();
        clearTimeout(timeoutid);
        element.textContent = "答え"
    } else if (count === 3) {
        sra.textContent = "/"  //ここね
        answer.textContent = "A. " + ans;
        element.textContent = "次へ"
        qanswer.textContent =qes.substring(index);
    } else if (count === 4) {
        sra.textContent = ""
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