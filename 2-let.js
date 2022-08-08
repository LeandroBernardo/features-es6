//let = Executadas dentro do escopo da função e não permite que a variável seja reutilizada fora do escopo

var animal = 'cat';

{
    let animal = 'dog';
    console.log(animal); //dog - escopo do bloco
}

console.log(animal); //cat - escopo global