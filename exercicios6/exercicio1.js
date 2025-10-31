import readline from 'readline-sync'

let valorA,valorB, valorC, somaAB;

valorA = readline.questionInt("Digite o valor de A: ");
valorB = readline.questionInt("Digite o valor de B: ");
valorC = readline.questionInt("Digite o valor de C: ");

somaAB = (valorA + valorB);

if(somaAB >= valorC){
    console.log("A soma de A + B é maior do que c. ");
}

if(somaAB <= valorC){
    console.log("A soma de A + B é menor do que o valor c.");
}

if(somaAB ==valorC){
    console.log("A soma de A + B é Igual a c.");
}