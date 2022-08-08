/**
 * Quando o código em javascript é compilado todas as declarações utilizando var são levadas ao topo do código, 
 *  isso se chama hoisting.
 * 
 * Importante observar que o hoisting ocorre para levar ao topo do código a declaração da variável e NÃO o valor atribuido a ela
 */


//Nesse exemplo o retorno será undefined, pois o javascript fez o hoisting e jogou a variável pro topo da execução
//O retorno undefined se deve pois apesar da variavel ter sido identificada, o valor atribuido a ela não foi.
//Importante: o uso do var permite que o codigo não resulte em erro
console.log(word);
var word = 'hoisting';


//ReferenceError: Cannot access 'errorReturned' before initialization
//Nesse caso houve erro pois variáveis let e const não tem hoisting no javascript
console.log(errorReturned);
let /**const */ errorReturned = `hoisting does'n work is this context`;


