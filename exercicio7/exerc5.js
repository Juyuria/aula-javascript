import readlineSync from 'readline-sync';

let soma = 0;
let numero;


do {
    numero = readlineSync.questionInt('Digite um numero: ');

    if(numero > 0) {
        soma+= numero;

    }
} while (numero !== 0);

console.log(`A soma dos números positivos é: ${soma}`);
