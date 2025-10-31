import readline from 'readline-sync';

let numero = readline.questionInt("Digite um número: ");

if (numero % 2 === 0) {
  // Verifica se é par
  if (numero >= 0) {
    console.log("O número é par e é positivo!");
  } else {
    console.log("O número é par e é negativo!");
  }
} else {
  // Verifica se é ímpar
  if (numero >= 0) {
    console.log("O número é ímpar e é positivo!");
  } else {
    console.log("O número é ímpar e é negativo!");
  }
}
