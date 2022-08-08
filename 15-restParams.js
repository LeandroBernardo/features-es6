/**
 * Rest Params: Bastante útil para utilizar em funções onde não sabemos ao certo a quantidade de argumentos que serão recebidos
 */


//Denominador vai pegar cada numerador e efetuar a divisão
function division(denominator, ...numerator) {
    return numerator.map(num => num / denominator)
}

console.log(division(2, 10, 50, 78, 1026, 65497986543135698));