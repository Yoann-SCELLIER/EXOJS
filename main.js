// YOANN & KEVIN - EXO JavaScript */

// On déclare une variable let
let number = 10;
// (console.log(number));

// Un prompt apparaît pour informez l'utilisateur, ce dernier doit entrer un nombre
userNumber = prompt("Découvres le bon numéro");

// Nous ne conaissons pas le nombre de tentatives de l'utilisateur, on utilise une boucle WHILE
while (userNumber != number) {
// Dans cette boucle, nous déterminons les conditions (+ / -)    
if (userNumber > number) {

    alert("TROP HAUT!");
    userNumber = prompt("Découvres le bon numéro");

} if (userNumber < number) {

    alert("TROP BAS!");
    userNumber = prompt("Découvres le bon numéro");
}

else {

    userNumber = prompt("Découvres le bon numéro");
}

}

// On sort de la boucle quand l'utilisateur trouve la bonne réponse
if (userNumber == number) {

    alert("BRAVO!");

} 