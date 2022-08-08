const times = {
    porco: 'Palmeiras',
    gaviao: 'Corinthians',
    peixe: 'Santos',
}

console.log(Object.entries(times)) //retorna um array com pares de valores

//Utilizando a feature Map
const timesMap = new Map(Object.entries(times));
console.log(timesMap);

const sizeTimes = timesMap.size
const hasTime = timesMap.has('peixe')
const getTime = timesMap.get('peixe')

console.log(`Tamanho: ${sizeTimes}`)
console.log(`Tem: ${hasTime}`)
console.log(`Traga: ${getTime}`)

