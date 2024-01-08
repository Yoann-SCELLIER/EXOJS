// YOANN & KEVIN - EXO JavaScript */

// On déclare une variable let (pour un chiffre déterminé)
// let number = 10;

// Pour un nombre aléatoire
// On déclare deux variables dans lesquelles seront stokées une valeur minimale et une maximale
let min = 0;
let max = 50;

//Math.floor nous permet de générer un chiffre sans virgule et Math.random randomise le processuss
let random = Math.floor(Math.random() * (max - min)) + min;
// console.log(random);

// (console.log(number));

// Un prompt apparaît pour informez l'utilisateur, ce dernier doit entrer un nombre
userNumber = prompt("Découvres le bon numéro");

// Nous ne conaissons pas le nombre de tentatives de l'utilisateur, on utilise une boucle WHILE
while (userNumber != random) {
// Dans cette boucle, nous déterminons les conditions (+ / -)    
if (userNumber > random) {

    alert("TROP HAUT!");
    userNumber = prompt("Découvres le bon numéro");

} if (userNumber < random) {

    alert("TROP BAS!");
    userNumber = prompt("Découvres le bon numéro");
}

else {

    userNumber = prompt("Découvres le bon numéro");
}

}

// On sort de la boucle quand l'utilisateur trouve la bonne réponse
if (userNumber == random) {

    alert("BRAVO!");

} 