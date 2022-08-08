const data = [
    {
        name: 'Leandro',
        age: 38,
        email: 'leandro.bernardos@gmail.com'
    },
    {
        name: 'Felipe',
        age: 10,
        email: 'felipe.bernardos@gmail.com'
    }
]


const dataFound = data.find(person => person.name === 'Felipe');
const dataFoundIndex = data.findIndex(person => person.name === 'Felipe');
const dataFoundToArray = Array.of(data)

console.log(dataFound)
console.log(Array.of(dataFound))
console.log(dataFoundIndex)