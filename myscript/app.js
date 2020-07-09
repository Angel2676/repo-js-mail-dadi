// Gioco dei dadi
// Generare un numero random da 1  a 6, sia per il giocatore sia per il computer
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// ESEMPIO CON UN DADO
// var dadiUtente = Math.floor((Math.random() * 6) + 1);
// alert ("il tuo numero è " + dadiUtente);
// var dadiPc = Math.floor((Math.random() * 6) + 1);
// console.log(dadiPc);
// alert ("il numero del tuo avversario è " + dadiPc)
//
// if (dadiUtente>dadiPc) {
//     confronto = "Hai vinto!!!!!!!!!!"
//     console.log(dadiUtente);
//
// } else {
//     confronto = " Oh No hai perso ma riprova sarai piu' fortunato"
//
// }
//
// document.getElementById('dati-vittoria').innerHTML = confronto


// ESEMPIO CON 2 DADI

var dadiUtente1 = Math.floor((Math.random() * 6) + 1);
var dadiUtente2 = Math.floor((Math.random() * 6) + 1);
var numeriTuoi = dadiUtente1 + dadiUtente2;
alert ("il tuo numero è " + numeriTuoi);
var dadiPc1 = Math.floor((Math.random() * 6) + 1);
var dadiPc2 = Math.floor((Math.random() * 6) + 1);
var numeriPc = dadiPc1 + dadiPc2;
var risultato;
alert ("il tuo numero del tuo avversario è " + numeriPc);
if (numeriTuoi > numeriPc) {
    risultato = "Il tuo risultato è " + numeriTuoi + " complimenti hai vinto"
} else {
    risultato = "Purtroppo hai perso il tuo avversario ha totalizzato " + numeriPc + " RIPROVA";

}

document.getElementById('dati-vittoria').innerHTML = risultato;
