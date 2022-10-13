let modal = document.getElementById('myModal');
let button = document.getElementById('button');
let span = document.getElementsByClassName('close')[0];
let outputText = document.getElementById('outputText');
let modalBackground = document.getElementById('modalBackground');

let ageCheck = document.getElementById('inputField');


button.onclick = function () {

    if (ageCheck.value < 18) {//Kijkt of in het input veld de waarde niet kleiner is dan 18.
        outputText.innerText = 'Helaas je bent te jong';//Tekst dat tevoorschijn komt als je jonger bent dan 18.
        outputText.style.color = 'white';//Veranderd de kleur van de tekst.
        modalBackground.classList.add('denied');//Toevoegd de class aan het modal achtergrond.
    } else {
        outputText.innerText = 'Je bent oud genoeg';//Tekst dat tevoorschijn komt als je ouder bent dan 18.
        outputText.style.color = 'white';
        modalBackground.classList.add('granted');
    }

    modal.style.display = 'block';//Laat hetv modal achtergrond tevoorschijn komen.
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}