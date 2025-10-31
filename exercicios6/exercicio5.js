import readlineSync from 'readline-sync';  // Importando corretamente o pacote

const codigo = readlineSync.questionInt("Código do Produto: ");
const quantidade = readlineSync.questionInt("Quantidade: ");

let produto = "";
let precoUnitario = 0;

switch (codigo) {
  case 1: produto = "Cachorro Quente"; precoUnitario = 10.00; break;
  case 2: produto = "X-Salada"; precoUnitario = 15.00; break;
  case 3: produto = "X-Bacon"; precoUnitario = 18.00; break;
  case 4: produto = "Bauru"; precoUnitario = 12.00; break;
  case 5: produto = "Refrigerante"; precoUnitario = 8.00; break;
  case 6: produto = "Suco de laranja"; precoUnitario = 13.00; break;
  default: produto = "Produto inválido"; precoUnitario = 0;
}

const valorTotal = quantidade * precoUnitario;

console.log(`Produto: ${produto}`);
console.log(`Valor total: R$ ${valorTotal.toFixed(2)}`);
