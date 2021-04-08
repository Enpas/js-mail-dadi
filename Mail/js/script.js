var emailList = ["pietro.smusi@gmail.com",
"enricoOttavo@gmail.com",
"luigisedicesimo@libero.it",
"mario.giallo@gmail.com",
"ArinzaAronza@gmail.com"];

var inputEmail = prompt("Inserisci la tua email:")
var msgSi = "<br> Accesso autorizzato!";
var msgNo = "<br> Accesso negato!";

document.getElementById("inputEmail").innerHTML = inputEmail;

for (var i = 0; i < emailList.length; i++) {
  var email = emailList[i];
  if (email === inputEmail) {
    document.getElementById("output").innerHTML = inputEmail + msgSi;
    break;
  } else {
    document.getElementById("output").innerHTML = inputEmail + msgNo;
  }
}