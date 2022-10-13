let a;
let b;
let arr;
let result;
let arrayScreen;

const inputScreen = document.querySelector(".input");
const resultScreen = document.querySelector(".result");
const btnClear = document.querySelector("#btn-clear");
const btnDelete = document.querySelector("#btn-delete");
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");
const btn5 = document.querySelector("#btn5");
const btn6 = document.querySelector("#btn6");
const btn7 = document.querySelector("#btn7");
const btn8 = document.querySelector("#btn8");
const btn9 = document.querySelector("#btn9");
const btn0 = document.querySelector("#btn0");
const btnAdd = document.querySelector("#btn-add");
const btnSubstract = document.querySelector("#btn-substract");
const btnMultiply = document.querySelector("#btn-multiply");
const btnDivide = document.querySelector("#btn-divide");
const btnEquals = document.querySelector("#btn-equals");
const btnDot = document.querySelector("#btn-dot");

btnClear.addEventListener("click", () => {
   inputScreen.textContent = "";
});

btnDelete.addEventListener("click", () => {
    arrayScreen = inputScreen.textContent;
    arrayScreen = arrayScreen.split("");
    let poppedOut = arrayScreen.pop();
    arrayScreen = arrayScreen.join("");
inputScreen.textContent = arrayScreen;
 });

btn1.addEventListener("click", () => {
   inputScreen.textContent =  `${inputScreen.textContent}1`;
});

btn2.addEventListener("click", () => {
    inputScreen.textContent =  `${inputScreen.textContent}2`;
 });

 btn3.addEventListener("click", () => {
    inputScreen.textContent =  `${inputScreen.textContent}3`;
 });

 btn4.addEventListener("click", () => {
    inputScreen.textContent =  `${inputScreen.textContent}4`;
 });

 btn5.addEventListener("click", () => {
    inputScreen.textContent =  `${inputScreen.textContent}5`;
 });

 btn6.addEventListener("click", () => {
    inputScreen.textContent =  `${inputScreen.textContent}6`;
 });

 btn7.addEventListener("click", () => {
    inputScreen.textContent =  `${inputScreen.textContent}7`;
 });

 btn8.addEventListener("click", () => {
    inputScreen.textContent =  `${inputScreen.textContent}8`;
 });

 btn9.addEventListener("click", () => {
    inputScreen.textContent =  `${inputScreen.textContent}9`;
 });

 btn0.addEventListener("click", () => {
    inputScreen.textContent =  `${inputScreen.textContent}0`;
 });

 btnAdd.addEventListener("click", () => {
    inputScreen.textContent =  `${inputScreen.textContent}+`;
 });

 btnSubstract.addEventListener("click", () => {
    inputScreen.textContent =  `${inputScreen.textContent}-`;
 });

 btnMultiply.addEventListener("click", () => {
    inputScreen.textContent =  `${inputScreen.textContent}x`;
 });

 btnDivide.addEventListener("click", () => {
    inputScreen.textContent =  `${inputScreen.textContent}/`;
 });

 btnEquals.addEventListener("click", () => {
    
    operate();
 });

 btnDot.addEventListener("click", () => {
    inputScreen.textContent =  `${inputScreen.textContent}.`;
 });

 function add(a,b) {
    result = a+b;
    resultScreen.textContent = result;
 };

 function substract(a,b) {
    result = a - b;
    resultScreen.textContent = result;
 };

 function  multiply(a,b) {
    result = a * b;
    resultScreen.textContent = result;
 };

 function divide(a,b) {
    result = a / b;
    resultScreen.textContent = result;
 };

function getAandB() {

    if (inputScreen.textContent.includes("+")) {
        arr = inputScreen.textContent.split("+");

    } else if (inputScreen.textContent.includes("-")) {
        arr = inputScreen.textContent.split("-");

    } else if (inputScreen.textContent.includes("x")) {
        arr = inputScreen.textContent.split("x");

    } else if (inputScreen.textContent.includes("/")) {
        arr = inputScreen.textContent.split("/");
    };
  
    a = arr.slice(0,1);
    b = arr.slice(1,2);
    console.log(a,b);

    a = a.toString();
    b = b.toString();
    console.log(a,b);

    a = +a;
    b = +b;
    console.log(a,b);
};


 function operate() {
    
    getAandB();


    if (inputScreen.textContent.includes("+")) {
        add(a,b);
    } else if (inputScreen.textContent.includes("-")) {
        substract(a,b);
    } else if (inputScreen.textContent.includes("x")) {
        multiply(a,b);
    } else if (inputScreen.textContent.includes("+")) {
        divide(a,b);
    };

    
 };
