/*function valid(){
    let nom=document.querySelector('#name_input');
    let email=document.querySelector('#email_input')
    let error=document.querySelector('#err')
    let patternnom=/[a-zA-Z]{3,40}/;
    if(patternom.test(nom.value)==false){
        event.preventDefault();
        nom.value="";
        error.innerHTML="NOM INVALIDE !!";
        error.style.color='red';
    }
    else{
        localStorage.setItem('name',nom.value);
    }

}*/

function valid(){
var nom = document.getElementById("nom").value;
var prenom = document.getElementById("prenom").value;
var mail =document.getElementById("mail").value;
var age = document.getElementById("age").value;
var tel = document.getElementById("tel").value;
var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
if (!mail.match(validRegex)){
    alert("adresse e-mail invalide");
}
else if (nom.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)){
    alert("le nom d'utilisateur ne doit pas contenir des chiffres");
}
else if (prenom.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)){
    alert("le prenom d'utilisateur ne doit pas contenir des chiffres");
}
else if (age<0){
    alert("l'age doit etre positif");
}
else if (tel.length != 8 || parseInt(tel).match(/[0-9]/)){
    alert("numéro de téléphone invalide");
}else
{
    localStorage.setItem("nom", nom);
    localStorage.setItem("prenom", prenom);
    localStorage.setItem("email", mail);
}
}

function authentification(){
    var a_nom =  document.getElementById("a_nom");
    var a_prenom = document.getElementById("a_prenom");
    var a_mail =  document.getElementById("a_mail");
    var x = localStorage.getItem("nom");
    var y = localStorage.getItem("prenom");
    var z = localStorage.getItem("email");
    if(a_nom ==x && a_prenom == y && a_mail ==z){
        alert("welcome "+ a_nom + " "+a_prenom);
    }
    else{
        alert("utilisateur indisponible");
    }
}