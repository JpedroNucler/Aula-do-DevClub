//Faça um programa que receba 3 números inteiros, e deve imprimir, qual é o maior, qual é o menor

const number1 = 40
const number2 = 20
const number3 = 50

if(number1 > number2 && number1 > number3) {
    console.log("O primeiro é o maior")
}else if (number2 > number3){
    console.log("O segundo é o maior")
}else {
    console.log("O terceiro é o maior")
}

if(number1 < number2 && number1 < number3) {
    console.log("O primeiro é o menor")
}else if (number2 < number3){
    console.log("O segundo é o menor")
}else {
    console.log("O terceiro é o menor")
}