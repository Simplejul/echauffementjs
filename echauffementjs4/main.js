function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}


var x = getRandomInt(10);
var y = getRandomInt(10);
var z = getRandomInt(3);

console.log(x, y,z);

var operateurs = ['+','-','*'];

var operation = x + operateurs[z] + y;
var reponse = prompt("Quel est le resultat de " + operation + " ?");

console.log(operation);

var resultat;
if (operation == x + "+" + y){
    resultat = x + y;
    console.log(resultat);
} else if (operation == x + "-" + y){
    resultat = x - y;
    console.log(resultat);
} else if (operation == x + "*" + y){
    resultat = x * y;
    console.log(resultat);
}

if (resultat == reponse) {
    console.log("Bonne réponse!");    
} else {
    console.log("La prochaine fois peut etre!");
}



// Ne comprends pas pourquoi ne fonctionne pas
/*switch (operation) {
    case "x+y":
        console.log(x + y);        
        break;
    case "x-y":
        console.log(x - y);        

        break;
    case "x*y":
        console.log(x * y);        
        break;
    default:
        console.log("probleme");
        
} */

