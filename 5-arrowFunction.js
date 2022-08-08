
const brazilStates = ['São Paulo', 'Rio de Janeiro', 'Rio Grande do Sul'];

//1 parametro não precisa de parentes e 1 linha de retorno não precisa de chaves
const states = brazilStates.map(stateName => `I love ${stateName}`);
console.log(states);

//2 parametros utilizando o parenteses
const statesWithIndex = brazilStates.map((stateName, index) => `Position: ${index} State:${stateName}`);
console.log(statesWithIndex);

//Exemplo de arrow function com filtro
const stateILove = brazilStates
    .filter(stateName => stateName === 'São Paulo')
    .map(stateName => `I do love ${stateName}`);

console.log(stateILove);




