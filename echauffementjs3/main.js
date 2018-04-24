function verif() {

    var identifiant = prompt("Quel est ton identifiant?");

    var motDePasse = prompt("Put ton mot de passe:");

    var at = identifiant.indexOf("@");

    if (identifiant.length > 4) {
        console.log("L id a plus de 4 caracteres.");
    } else {  
        verif ();
    }

    
    if (at === -1) {
        verif();
    } else {
        console.log("L id contient un @");        
    }

    if ((identifiant !== "lea@gmail.com") || (motDePasse !== "12345")){
        console.log("Toi, t es pas bienvenu!");        
        verif();
    } else{
        console.log("Welcome!")
    }

}

verif();