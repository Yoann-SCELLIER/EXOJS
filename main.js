// YOANN & KEVIN - EXO JavaScript */

// On déclare une variable let (pour un chiffre déterminé)
// let number = 10;

// La fonction retry() propose à l'utilisateur de rententer sa chance, elle contient un refresh (location.reload()) natif
function retry()  {

    let result = confirm("Voulez-vous rejouer?");

    if(result)  {
        location.reload()
    } else {
        alert("Merci d'avoir joué");
    }
}

// Pour un nombre aléatoire
// On déclare deux variables dans lesquelles seront stokées une valeur minimale et une maximale
let min = 1;
let max = 50;
let attempt = 5;

//Math.floor nous permet de générer un chiffre sans virgule et Math.random randomise le processuss
let random = Math.floor(Math.random() * (max - min)) + min;

// Un prompt apparaît pour informez l'utilisateur, ce dernier doit entrer un nombre
let userNumber = prompt("Découvres le bon numéro");

// Nous ne conaissons pas le nombre de tentatives de l'utilisateur, on utilise une boucle WHILE
while (userNumber != random && attempt > 0) {
    // Dans cette boucle, nous déterminons les conditions (+ / -)    
    if (userNumber > random) {

        alert("TROP HAUT!");
        attempt --;

    } else {

        alert("TROP BAS!");
        attempt --;
        
    }

    userNumber = prompt("Découvres le bon numéro");
}

// On sort de la boucle quand l'utilisateur trouve la bonne réponse
if (userNumber == random) {

    alert("BRAVO!");
    retry()

} 

// Nombre de tentatives maximale atteinte
else (attempt == 0)

{

  alert('Nombre de tentatives maximale atteinte');
  retry()

}
