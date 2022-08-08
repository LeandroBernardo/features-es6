const locals = {
    live: 'Guarulhos',
    love: 'New York'
}

const { live, love } = locals;

//Sem template literal
console.log('I live in ' + live + ' but I love ' + love);


//Com template literal
console.log(`I live in ${live} but I love ${love}`);