/**
 * Swap serve para trocar os valores das variáveis sem ter que criar uma variavel nova
 */

let num1 = 10;
let num2 = 30;

console.log(num1);
console.log(num2);

//Fazer o swap via destructuring, as posições são invertidas
[num1, num2] = [num2, num1];

console.log(num1);
console.log(num2);