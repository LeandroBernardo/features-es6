/**
 * Default Parameters permitem que sejam passados valores default para os parametros da função, caso a função seja chamada sem parametros,
 * o valor assumido passar a ser o default
 */

function hello(name = 'Felipe', surname = 'Bernardo') {
    console.log(`Hi ${name} ${surname}, What's up!!`)
}


hello('Leandro', 'Santos'); //Hi Leandro Santos, What's up!!
hello(); //Hi Felipe Bernardo, What's up!!
hello(undefined, 'Santos');