import readlineSync from 'readline-sync';

let salarioBruto = 0;
let adicionalNoturno = 0;
let horasExtras = 0;
let descontos = 0;
let salarioLiquido = 0;

salarioBruto = readlineSync.questionFloat('Digite o seu salario bruto: ');
adicionalNoturno = readlineSync.questionFloat('Digite o seu adicional noturno: ');
horasExtras = readlineSync.questionFloat('Digite o seu horasExtras: ');
descontos = readlineSync.questionFloat('Digite o seu descontos: ');

salarioLiquido = salarioBruto + adicionalNoturno + (horasExtras * 5) - descontos;

console.log(
    `O seu salario liquido é:
    ${salarioLiquido.toFixed(2)}`
);