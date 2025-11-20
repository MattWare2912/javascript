let min = prompt("écris un nombre");
let max = prompt("écris un nombre");
let current = prompt("écris un nombre entre " + min +" et " + max + " :");

if (min > max) {
    alert("oups ! la valeur minimale est plus grande que la valeur maximale");
} 

if (current >= min && current <= max) {
        alert("le nombre est comprit entre min et max");
    }



