// exercicio de operação de calculo

const num1 = 236;
const num2 = 95;

// soma
let soma = num1 + num2;

console.log("Resultado: " + soma + "!");
console.log("Resultado: " , soma);
console.log(`Resultado: ${ soma } mil`);

//subtração -
let sub = num1 - num2;

console.log("Resultado:" + sub);

//multiplicação *
let mult = num1 * num2;

console.log("Resultado:" + mult);
//divisao

let div = num1 / num2;

console.log("Resultado:" + div);
//numero par ou impar
//let num1parouimpar = num1 % 2;
//let num2parouimpar = num2 % 2;

//console.log("Num1" + num1parouimpar);
//console.log("Num2" + num2parouimpar);

if(num1 % 2 === 0) {
    console.log("Num1 é par");
} else {
    console.log("Num1 é impar");
}

if(num2 % 2 === 0) {
    console.log("Num2 é par");
} else {
    console.log("Num2 é impar");
}

