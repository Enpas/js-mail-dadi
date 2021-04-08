var numPc = Math.floor(Math.random() * 6) + 1;
var numUtente = Math.floor(Math.random() * 6) + 1;
var msgVittoria = "hai vinto!";
var msgSconfitta = "hai perso!";
var msgPareggio = "pareggio!";

document.getElementById("numPc").innerHTML = numPc;
document.getElementById("numUtente").innerHTML = numUtente;

if ( numUtente > numPc) {
  document.getElementById("output").innerHTML = msgVittoria;
} else if (numUtente< numPc) {
  document.getElementById("output").innerHTML = msgSconfitta;
} else {
  document.getElementById("output").innerHTML = msgPareggio;
}