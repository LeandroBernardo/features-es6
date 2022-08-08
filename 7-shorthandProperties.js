const firstname = 'Leandro';
const surname = 'Santos';
const age = '38';

//Sem shorthand
const personWithoutShorthand = {
    firstname: firstname,
    surname: surname,
    age: age,

    helloPersonWithoutShorthand: function () {
        console.log(`Hello ${firstname}`);
    }
};


/***
 * Com shorthand
 * Se a propriedade tiverem o mesmo nome da variavel, não é necessário a repetição dos nomes
 */
const personWithShorthand = {
    firstname,
    surname,
    age,

    //Não é necessário a declaração explicita da palavra function
    helloPersonWithShorthand() {
        console.log(`Hello ${firstname}`);
    }
};

console.log(personWithoutShorthand);
personWithoutShorthand.helloPersonWithoutShorthand();


console.log(personWithShorthand);
personWithShorthand.helloPersonWithShorthand();