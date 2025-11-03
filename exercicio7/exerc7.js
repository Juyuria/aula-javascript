import readline from 'readline-sync';

const numeros = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];

const numero = readline.questionInt("Digite o número que você deseja encontrar: ");

const posicao = numeros.indexOf(numero);

if (posicao !== -1) {
    console.log(`O número ${numero} está localizado na posição: ${posicao}`);
} else {
    console.log(`O número ${numero} não foi encontrado!`);
}
