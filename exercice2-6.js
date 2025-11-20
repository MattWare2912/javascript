let number = prompt("Enter a number between 1 and 7:");
number = Number(number); // Number veut dire qu'il affiche la réponse en nombre

let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

if (number >= 1 && number <= 7) {
  alert(days[number - 1]); // -1 -signifie que le premier jour sera Monday car index 0 dans le tableau
} else {
  alert("Invalid number! Please enter between 1 and 7.");
}
