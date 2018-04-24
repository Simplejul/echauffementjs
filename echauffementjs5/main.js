var notes = [];

// Fonction permettant de rentrer les notes dans le tableau "notes"
for (var i = 0; i < 10; i++) {
    
    // Definition des notes
    var choix = prompt("Saisir une note entre 0 et 20:");
    
    // Tant que le nombre n est pas compris entre 0 et 20:
    while ((choix < 0) || (choix > 20)){
        console.log("Ré-essayer!");    
        choix = prompt("Saisir une note entre 0 et 20:");;
    }
    
    console.log(choix);
    
    var nbChoix = Number(choix);

    // On push la note dans le tableau
    notes.push(nbChoix);
}


// Somme de chaque partie du tableau
var somme = 0;
for (let i = 0; i < notes.length; i++) {
    somme = somme + notes[i];
}

// Affichage de la somme
console.log("La somme de chaque partie du tableau est " + somme);

// Calcul de la moyenne du tableau 'notes'
var moyenne = somme / 10;
console.log("La moyenne est " + moyenne);


