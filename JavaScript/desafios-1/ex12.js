// Faça um programa onde colocamos dois numeros ímpares e o programa imprima o resto da divisão. Ex: 7/3 deve imprimir: 1, 25/5 deve imprimir: 0.

const num1 = 7;
const num2 = 3;

if (num1 % 2 !== 0 && num2 % 2 !== 0) {
  const resto = num1 % num2;
  console.log(resto);
}

const num3 = 25;
const num4 = 5;

if (num3 % 2 !== 0 && num4 % 2 !== 0) {
  const resto = num3 % num4;
  console.log(resto);
}