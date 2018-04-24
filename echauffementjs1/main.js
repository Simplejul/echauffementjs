function verifierNom(name) {
    if (name.length > 0 && name.length < 11){
        console.log("Bonjour " + name +"!")
    } else {
        console.log("Nom invalide");        
    }
}

var nom = prompt("Quel est votre nom?");
verifierNom(nom);