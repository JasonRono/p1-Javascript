//Constante variabelen met een id erin.
const computerChoice = document.getElementById('computer-choice');
const playerChoice = document.getElementById('player-choice');
const resultOutput = document.getElementById('result');

//Contante variabel met de buttons elementen + id.
const possibleChoices = document.querySelectorAll('button');

//3 normale variabelen die leeg zijn.
let player;
let computer;
let result;

//Een EventListener doormiddel van een forEach-loop.
possibleChoices.forEach(button => button.addEventListener('click', (e) => {
    player = e.target.id;
    playerChoice.innerText = player;
    generateComputerChoice();
    getResult();
}));

//Functie die een random getal pakt tussen 1 en 3 en daarna meteen de waarde erin.
function generateComputerChoice() {
    //Pakt een nummer tussen 1 en 3.
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    console.log(randomNumber);

    //If statements met de nummers die een waarde krijgen.
    if (randomNumber == 1) {
        computer = 'rock';
        computerChoice.innerHTML = 'rock';
    } if (randomNumber == 2) {
        computer = 'paper';
        computerChoice.innerHTML = 'paper';
    } if (randomNumber == 3) {
        computer = 'scrissors';
        computerChoice.innerHTML = 'scissors';
    }

    //Console.log wat de uitslag is.
    console.log(computer);
}

//Functie die het resultaat uitrekend.
function getResult() {
    if (computer == player) {
        resultOutput.innerText = 'Gelijkspel';
    } else if (computer != player) {
        resultOutput.innerText = 'je hebt verloren';
    } else {
        resultOutput.innerText = 'je hebt gewonnen';
    }
}

