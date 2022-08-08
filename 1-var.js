//var = Escopo dentro de uma  função ou globais fora de uma função

var animal;

function nameAnimal() {
    animal = 'dog';
    console.log(animal);
}

nameAnimal();