import readlineSync from 'readline-sync'
let salario = 0
let abono = 0
let soma = 0
salario = readlineSync.questionFloat("qual o seu salário")
abono = readlineSync.questionFloat("qual o seu abono")
soma = salario + abono
console.log("Soma do salario + abono" + soma)