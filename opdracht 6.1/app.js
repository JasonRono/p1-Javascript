let title = document.getElementById('title');//Variabele met de id erin.
function kleur_aanpassen() {//Begin van de function.
    title.style.color = 'red';//Kleur veranderd van de h1 element.
    title.innerText = 'Inhoud aangepast!';//Veranderd de tekst van de h1 element.
}//Einde van de function.

//Is de kleur veranderd? Ja.

kleur_aanpassen();//Roept de functie op en activeerd het.
