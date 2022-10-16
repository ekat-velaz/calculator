let a;
let b;
let arr;
let result;
let arrayScreen;
let arrLength;
let stringInput = "";
let stringPart;
let stringStart;

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
   stringInput = "";
   btnDot.disabled = false;
});

btnDelete.addEventListener("click", () => {
    arrayScreen = inputScreen.textContent;
    arrayScreen = arrayScreen.split("");
    let poppedOut = arrayScreen.pop();
    arrayScreen = arrayScreen.join("");
inputScreen.textContent = arrayScreen;

stringInput = stringStart.toString();
stringInput = stringInput.split('"');
poppedOut = stringInput.pop();
stringInput = stringInput.join('"');

btnDot.disabled = false;
 });

btn1.addEventListener("click", () => {
   inputScreen.textContent =  `${inputScreen.textContent}1`;
   stringInput = `${stringInput}1`;
});

btn2.addEventListener("click", () => {
    inputScreen.textContent =  `${inputScreen.textContent}2`;
    stringInput = `${stringInput}2`;
 });

 btn3.addEventListener("click", () => {
    inputScreen.textContent =  `${inputScreen.textContent}3`;
    stringInput = `${stringInput}3`;
 });

 btn4.addEventListener("click", () => {
    inputScreen.textContent =  `${inputScreen.textContent}4`;
    stringInput = `${stringInput}4`;
 });

 btn5.addEventListener("click", () => {
    inputScreen.textContent =  `${inputScreen.textContent}5`;
    stringInput = `${stringInput}5`;
 });

 btn6.addEventListener("click", () => {
    inputScreen.textContent =  `${inputScreen.textContent}6`;
    stringInput = `${stringInput}6`;
 });

 btn7.addEventListener("click", () => {
    inputScreen.textContent =  `${inputScreen.textContent}7`;
    stringInput = `${stringInput}7`;
 });

 btn8.addEventListener("click", () => {
    inputScreen.textContent =  `${inputScreen.textContent}8`;
    stringInput = `${stringInput}8`;
 });

 btn9.addEventListener("click", () => {
    inputScreen.textContent =  `${inputScreen.textContent}9`;
    stringInput = `${stringInput}9`;
 });

 btn0.addEventListener("click", () => {
    inputScreen.textContent =  `${inputScreen.textContent}0`;
    stringInput = `${stringInput}0`;
 });

 btnAdd.addEventListener("click", () => {
    inputScreen.textContent =  `${inputScreen.textContent}+`;
    stringInput = `${stringInput}"+"`;
    btnDot.disabled = false;
 });

 btnSubstract.addEventListener("click", () => {
    inputScreen.textContent =  `${inputScreen.textContent}-`;
    stringInput = `${stringInput}"-"`;
    btnDot.disabled = false;
 });

 btnMultiply.addEventListener("click", () => {
    inputScreen.textContent =  `${inputScreen.textContent}x`;
    stringInput = `${stringInput}"x"`;
    btnDot.disabled = false;
 });

 btnDivide.addEventListener("click", () => {
    inputScreen.textContent =  `${inputScreen.textContent}/`;
    stringInput = `${stringInput}"/"`;
    btnDot.disabled = false;
 });

 btnEquals.addEventListener("click", () => {
    
    operate();
    btnDot.disabled = false;
 });

 btnDot.addEventListener("click", () => {
    inputScreen.textContent =  `${inputScreen.textContent}.`;
    stringInput = `${stringInput}.`;
    btnDot.disabled = true;
 });

 function add(a,b) {
    result = a+b;
    result = Math.round(result*100)/100;
    resultScreen.textContent = result;
 };

 function substract(a,b) {
    result = a - b;
    result = Math.round(result*100)/100;
    resultScreen.textContent = result;
 };

 function  multiply(a,b) {
    result = a * b;
    result = Math.round(result*100)/100;
    resultScreen.textContent = result;
 };

 function divide(a,b) {
    result = a / b;
    result = Math.round(result*100)/100;
    resultScreen.textContent = result;
 };

function splitInput() {
    arr = inputScreen.textContent;
    arr = arr.split("+");
    arr = arr.join(" ")
    arr = arr.split("-");
    arr = arr.join(" ");
    arr = arr.split("x");
    arr = arr.join(" ");
    arr = arr.split("/");
    arr = arr.join(" ");
    arr = arr.split(" ");
    console.log(arr);
};

function getAandB() {
    a = arr.slice(0,1);
    b = arr.slice(1,2);
    console.log(a,b);
    
    arr = arr.slice();
    console.log(arr);

    a = a.toString();
    b = b.toString();

    a = +a;
    b = +b;
    console.log(a,b);
};

function chooseOperation() {
   if (stringPart === "+") {
      add(a,b);
  } else if (stringPart === "-") {
      substract(a,b);
  } else if (stringPart === "x") {
      multiply(a,b);
  } else if (stringPart === "/") {
      divide(a,b);
  };
};

function getAandBfromResult() {
 a = result;
 b = arr.slice(0,1);
 console.log(a,b);
    
    a = a.toString();
    b = b.toString();
    a = +a;
    b = +b;
    console.log(a,b);

};

 function operate() {
   splitInput();
stringStart = stringInput;

   stringInput = stringInput.toString();
   console.log(stringInput);
   stringInput = stringInput.split('"');

   
    getAandB();
    stringInput.shift();
    getStringPart();
    chooseOperation();
    

console.log(result);
arr.shift();

for (let i=0; i <= arr.length; i++) {
   stringInput.shift();
   stringInput.shift();
   getStringPart();
   arr.shift();
 if (arr.length >= 1) {
   console.log(arr);
   getAandBfromResult();
   chooseOperation();
   console.log(result);
   
 };
};
    
};

function getStringPart() {
   stringPart = stringInput.slice(0,1);
   stringPart = stringPart.toString();
   console.log(stringPart);
};


addEventListener('keypress', logKey);

function logKey(e) {
  
  if (e.key == "+" || e.key == "-" || e.key == "x"|| e.key == "/") {
   inputScreen.textContent += `${e.key}`;
   stringInput = `${stringInput}"${e.key}"`;
  } else if (e.key == "1" || e.key == "2" || e.key == "3"|| e.key == "4" ||
  e.key == "5" || e.key == "6" || e.key == "7"|| e.key == "8" ||
  e.key == "9" || e.key == "0" ) {
   inputScreen.textContent += `${e.key}`;
   stringInput = `${stringInput}${e.key}`;
  } else if (e.key == "=") {
   operate();
  };
};