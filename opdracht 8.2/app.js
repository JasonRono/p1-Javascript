let inputValue1 = document.getElementById('input1');
let inputValue2 = document.getElementById('input2');

let answerText = document.getElementById('anwser');

function multiply() {
    let multiplyAnswer = inputValue1.value * inputValue2.value;
    if (multiplyAnswer > 0) {
        answerText.innerText = 'Het antwoord is ' + multiplyAnswer;
    } else {
        answerText.innerText = 'Het getal is te laag';
    }
}

function minus() {
    let minusAnswer = inputValue1.value - inputValue2.value;
    if (minusAnswer > 0) {
        answerText.innerText = 'Het antwoord is ' + minusAnswer;
    } else {
        answerText.innerText = 'Het getal is te laag';
    }
}

function add() {
    let AddAnswer = inputValue1.value + inputValue2.value;
    if (AddAnswer > 0) {
        answerText.innerText = 'Het antwoord is ' + AddAnswer;
    } else {
        answerText.innerText = 'Het getal is te laag';
    }
}

function devide() {
    let devideAnswer = inputValue1.value / inputValue2.value;
    if (devideAnswer > 0) {
        answerText.innerText = 'Het antwoord is ' + devideAnswer;
    } else {
        answerText.innerText = 'Het getal is te laag';
    }
}

