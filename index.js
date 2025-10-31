const leia = require('readline-sync');

let quantidade;
let altura;
let tipo;
let resposta;
let palavra;

palavra = leia.question("\nDigite um valor do tipo string: ");
console.log("O valor string digitado foi: " + palavra);