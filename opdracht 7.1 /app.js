let budget = 100;//Variabele met een getal in.
let product = 60;//Variabele met een getal in.
let text = document.getElementById('text');//Variabele met de id erin.

if (budget > product) { // Als het budget groter is dan product in waarde.
    alert('U heeft genoeg geld!.');//Dan word deze alert gegeven.
    text.innerText = 'Genoeg geld';
    text.style.color = 'green';
} else {//Als het budget kleiner is dan product in waarde.
    alert('Helaas, te weinig geld');//Dan word deze alert gegeven.
    text.innerText = 'weinig geld';
    text.style.color = 'red';
}