

let random = Math.floor(Math.random() * a.length);
let qes = a[random].question;
let ans = a[random].answer;
let chars = qes.split("");
let number = a.indexOf(ans);
let button = document.getElementsByTagName("button");


var button = document.getElementById("button");
 
// ボタンをクリックした時の処理
button.addEventListener("click", function(e) {
 
    e.preventDefault();
 
    // 入力フォームの値を取得
    var textForm = document.getElementById("textForm").value;
 
    // 取得した値を別の入力フォームに表示
    var resultForm = document.getElementById("resultForm");
    resultForm.value = textForm;
});



//alert("ライン打ってね");
