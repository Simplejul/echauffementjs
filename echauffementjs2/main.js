
var reponse = prompt("Quelle est la couleur du cheval blanc d'Henri IV?");

if (reponse.toUpperCase() !== "BLANC") {
    console.log(reponse + " n'est pas la réponse.\nRetentes ta chance!");  
} else {
    console.log("Bravo!");    
}


var reponse2 = prompt("Combien y a-t-il de sept nains?");

if ((reponse2.toUpperCase() === "SEPT") || (Number(reponse2) === 7)) {
    console.log("Bravo!");  
} else {
     console.log(reponse2 + " n'est pas la réponse.\nRetentes ta chance!");  
}