"use strict";

// Sélection de l'élément et affichage du texte dans la console
// console.log(document.querySelector(".message").textContent);

// Modification du contenu texte de l'élément avec la classe .number
// document.querySelector(".number").textContent = 13;
// Modification du contenu texte de l'élément avec la classe .score
// document.querySelector(".score").textContent = 10;

// Modification de la valeur de l'élément input avec la classe .guess
// document.querySelector(".guess").value = 23;

// Génération d'un nombre secret aléatoire entre 1 et 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// Initialisation du score à 5
let score = 20;
let highscore = 0;

// Affichage du nombre secret dans l'élément avec la classe .number
document.querySelector(".number").textContent = "??";

// Ajout d'un écouteur d'événements de clic sur le bouton avec la classe .check
document.querySelector(".check").addEventListener("click", function () {
  // Conversion de la valeur de l'input .guess en nombre
  const guess = Number(document.querySelector(".guess").value);

  // Affichage du nombre deviné et de son type dans la console
  console.log(guess, typeof guess);

  // Vérification si aucune valeur n'a été entrée
  if (!guess) {
    // Modification du contenu texte de l'élément avec la classe .message
    document.querySelector(".message").textContent = "no number !";
  } else if (guess !== secretNumber) {
    if (score > highscore) {
      document.querySelector(".message").textContent =
        guess > secretNumber ? "too high" : "too low";
    }
  } else if (score === 0) {
    // Modification du contenu texte de l'élément avec la classe .message
    document.querySelector(".message").textContent =
      "partie perdue, run out of score !";
  }
  // Vérification si la valeur devinée est égale au nombre secret
  else if (guess === secretNumber) {
    // Modification du contenu texte de l'élément avec la classe .message
    document.querySelector(".message").textContent = "correct number!";

    // Affichage du nombre secret dans l'élément avec la classe .number
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector(".number").style.fontSize = "900%";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector("body").style.backgroundColor = "#60b347";
  }
});

//     if (score > highscore) {
//       highscore = score;
//       document.querySelector(".highscore").textContent = highscore;
//     }
//   }
//   // Vérification si la valeur devinée est supérieure au nombre secret
//   else if (guess > secretNumber) {
//     if (score > 0) {
//       // Décrémentation du score et mise à jour du contenu texte de l'élément .score
//       score--;
//       document.querySelector(".score").textContent = score;
//       // Modification du contenu texte de l'élément avec la classe .message
//       document.querySelector(".message").textContent = "too high !";
//     }
//     // Vérification si le score est à 0
//     else if (score === 0) {
//       // Modification du contenu texte de l'élément avec la classe .message
//       document.querySelector(".message").textContent =
//         "partie perdue, run out of score !";
//     }
//   }
//   // Vérification si la valeur devinée est inférieure au nombre secret
//   else if (guess < secretNumber) {
//     if (score > 0) {
//       // Décrémentation du score et mise à jour du contenu texte de l'élément .score
//       score = score - 1;
//       document.querySelector(".score").textContent = score;
//       // Modification du contenu texte de l'élément avec la classe .message
//       document.querySelector(".message").textContent = "too low !";
//     }
//     // Vérification si le score est à 0
//     else if (score === 0) {
//       // Modification du contenu texte de l'élément avec la classe .message
//       document.querySelector(".message").textContent =
//         "partie perdue, run out of score !";
//     }
//   }
// });

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  highscore = 0;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "start guessing .. !";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector(".highscore").textContent = highscore;
});

//projet fin
