
const question = document.getElementById("question");
const answer = document.getElementById("answer");
const element = document.getElementById("element");
const sound = document.getElementById("sound");
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

let count = 0;
let timeoutid = null;
let isRunning = false;
let index;

function tick() {
    question.textContent += chars[index];
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
        index = 0;
        tick();
        ring();
    } else if (count === 2) {
        ring1();
        clearTimeout(timeoutid);
        element.textContent = "答え"
    } else if (count === 3) {
        answer.textContent = "A. " + ans;
        element.textContent = "次へ"
        //qanswer.textContent = qes.substring(timeoutid);
        qanswer.textContent = qes.substring(index);
    } else if (count === 4) {
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

