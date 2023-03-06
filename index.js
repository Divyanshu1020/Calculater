const numberButton = document.querySelectorAll("[data-number]");
const operationButton = document.querySelectorAll("[data-operation]");
const equalButton = document.querySelector("[data-equals]");
const deletelButton = document.querySelector("[data-delete]");
const allClearlButton = document.querySelector("[data-all-clear]");
const prevoiusTextElement = document.querySelector("[data-previous]");
const currentTextElement = document.querySelector("[data-current]");


import {Calculator} from "./calculat.js";
 
const calculat = new Calculator(prevoiusTextElement,currentTextElement);

numberButton.forEach(button => {
    button.addEventListener("click",function(){
        // console.log(button.textContent);
        calculat.appendNumber(button.textContent);
        calculat.updateDisplay()
    })
})

operationButton.forEach(button => {
    button.addEventListener("click", function() {
        // console.log(button.textContent);
        calculat.chooseOperation(button.textContent);
        calculat.updateDisplay();
    })
})

equalButton.addEventListener("click",function(button) {
    calculat.compute();
    calculat.updateDisplay();
})
allClearlButton.addEventListener("click",function(button) {
    calculat.delete();
    calculat.updateDisplay();
})
deletelButton.addEventListener("click",function(button) {
    calculat.Clear();
    calculat.updateDisplay();
})