//Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. Porém, os dois nomes devem estar em um Array. Ex: const array = ["João", "Maria"]. João e João, imprime true. João e Maria, imprime false

const nomes = ["João", "Maria"];
const nomes2 = ["João","João"];

if (nomes[0] === nomes[1]) {
  console.log(true);
} 

else {
  console.log(false);
}

if (nomes2[0] === nomes2[1]) {
    console.log(true);
  } 
  
  else {
    console.log(false);
  }
  