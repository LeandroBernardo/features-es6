//const = não permite reatribuição de valores

const age = 28;

console.log(age);

/**
 * Caso eu queria reatribuir o valor para a variavel age, vou receber um erro 
 * age = 28 - Assignment to constant variable. (Atribuição a uma variável constante)
 */

/**
 * Abaixo, uma exemplo de objeto, onde é possível reatribuir valores nas propriedades.
 * Nesse exemplo a variavel é person e as propriedade são name e gender
 */

const person = {
    name: 'Leandro',
    gender: 'male'
}

console.log(person);

//reatribuição de valor para uma propriedade - ✅
person.gender = 'male a lot';
console.log(person.gender);

//o erro só ocorreria se fosse declarado novamente a variavel person
/*
person = {
    name: 'Eli',
    gender: 'female'
}

console.log(person); //TypeError: Assignment to constant variable.
*/


