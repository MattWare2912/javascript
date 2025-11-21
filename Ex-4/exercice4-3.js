function rand10() {
    return Math.floor(Math.random() * 10) + 1;
}

function multiRand(n) {
    let result = [];
    for (let i = 0; i < n; i++) {
        result.push(rand10());
    }
    return result;
}

let n = parseInt(prompt("combien de nombres ?"), 10);
let randomNumbers = multiRand(n);

console.log("voici les nombres", randomNumbers);
alert ("tes nombres alétoire : " + randomNumbers.join(", "));

// ps j'ai pas comprit ce que je viens d'écrire mais oklm 
