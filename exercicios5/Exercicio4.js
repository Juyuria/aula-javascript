import readlineSync from 'readline-sync';

let num1 = 0;
let num2 = 0;
let num3 = 0;
let num4 = 0;
let resultado = 0;

num1 = readlineSync.questionFloat("Digite o primeiro número: ");
num2 = readlineSync.questionFloat("Digite o segundo número: ");
num3 = readlineSync.questionFloat("Digite o terceiro número: ");
num4 = readlineSync.questionFloat("Digite o quarto número: ");

resultado = (num1 * num2) - (num3 * num4);

console.log (
    ` O resultado do calculo de produto é:
    ${resultado.toFixed(2)}`
);