//Oefening 1
function calculate(getal1, getal2) {
    getal1 = Number(prompt('Type een getal'));//Vraagt de gebruiker om een getal in te voeren.
    getal2 = Number(prompt('Type een getal'));

    let antwoord = getal1 + getal2;
    alert(antwoord);
}

calculate()//Roep de functie op.

//Oefening 2
function multiplyByFive(getal1, five) {
    getal1 = Number(prompt('Type een getal'));
    five = 5;

    let antwoord = getal1 * five;
    alert(antwoord);
}

multiplyByFive();//Roep de functie op.

//Oefening 3
function checkInput(getal1, getal2) {
    getal1 = Number(prompt('Type een getal'));
    getal2 = Number(prompt('Type een getal'));

    if (getal1 > getal2) {//If statement word gebruikt om uit te lezen of getal 1 groter is dan getal 2.
        alert('Het getal ' + getal1 + ' is groter.');
        console.log();
    } else {//Else statement als getal 2 groter is dan getal 1.
        alert('Het getal ' + getal2 + ' is groter.');
        console.log('Het getal ' + getal2 + ' is groter.');
    }
}

checkInput();//Roep de functie op.

//Oefening 4
function calculateMinutes(seconden, minuten) {
    seconden = Number(prompt('Type een getal in'));
    minuten = seconden / 60;//Hier worden de secondes in minuten omgerekend.
    console.log(minuten + ' minuten');//Laat het antwoord zien in de console. 
}

calculateMinutes();//Roept de functie op.