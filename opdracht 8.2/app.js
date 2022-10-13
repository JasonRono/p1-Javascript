let inputValue1 = document.getElementById('input1');//Pakt de id van de input element.
let inputValue2 = document.getElementById('input2');

let answerText = document.getElementById('anwser');//Pakt de id van de h1 element.

//Begin van de functie.
function multiply() {
    let multiplyAnswer = inputValue1.value * inputValue2.value;//Variabele met erin de 2 waardes die in de input elementen zitten. Hierin word meteen het antwoord berekend.
    if (inputValue1.value < 0 && inputValue2.value < 0) {//If statement met de && operator waarbij word gekeken of de 2 input waardes niet lager zijn 0.
        answerText.innerText = 'Het input waardes zijn te laag';//Hier word het antwoord op het scherm gezet. 
    } else {
        answerText.innerText = 'Het antwoord is ' + multiplyAnswer;
    }
}//Einde van de functie.

function minus() {
    let minusAnswer = inputValue1.value - inputValue2.value;
    if (inputValue1.value < 0 && inputValue2.value < 0) {
        answerText.innerText = 'Het input waardes zijn te laag';
    } else {
        answerText.innerText = 'Het antwoord is ' + minusAnswer;
    }
}

function add() {
    let AddAnswer = inputValue1.value + inputValue2.value;
    if (inputValue1.value < 0 && inputValue2.value < 0) {
        answerText.innerText = 'Het input waardes zijn te laag';
    } else {
        answerText.innerText = 'Het antwoord is ' + AddAnswer;
    }
}

function devide() {
    let devideAnswer = inputValue1.value / inputValue2.value;
    if (inputValue1.value < 0 && inputValue2.value < 0) {
        answerText.innerText = 'Het input waardes zijn te laag';
    } else {
        answerText.innerText = 'Het antwoord is ' + devideAnswer;
    }
}
