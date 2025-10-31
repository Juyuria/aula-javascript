import readlineSync from 'readline-sync';  // Usando import

// Entradas
const nome = readlineSync.question("Nome do colaborador: ");
const cargoCodigo = readlineSync.questionInt("Cargo (1-6): ");
const salario = readlineSync.questionFloat("Salário: R$ ");

// Array de cargos e reajustes
const cargos = [
  { nome: "Gerente", reajuste: 0.10 },
  { nome: "Vendedor", reajuste: 0.07 },
  { nome: "Supervisor", reajuste: 0.09 },
  { nome: "Motorista", reajuste: 0.06 },
  { nome: "Estoquista", reajuste: 0.05 },
  { nome: "Técnico de TI", reajuste: 0.08 }
];

// Obter o cargo e reajuste
const cargo = cargos[cargoCodigo - 1] || { nome: "Cargo inválido", reajuste: 0 };

// Calcular o novo salário
const novoSalario = salario * (1 + cargo.reajuste);

// Exibir resultado
console.log(`Nome do colaborador: ${nome}`);
console.log(`Cargo: ${cargo.nome}`);
console.log(`Salário: R$ ${novoSalario.toFixed(2)}`);
