/**
 * https://www.freecodecamp.org/news/higher-order-functions-in-javascript-examples/
 */


const data = [
    { nome: 'Leandro', age: 10, salary: 15.95 },
    { nome: 'Felipe', age: 11, salary: 22.98 },
    { nome: 'Elisangela', age: 12, salary: 45.65 },
    { nome: 'Leandro Bernardo', age: 20, salary: 19.99 },
    { nome: 'Felipe Bernardo', age: 25, salary: 29.99 },
    { nome: 'Elisangela Bernardo', age: 35, salary: 49.99 },
]

//Exibir dados da array
const dataMap = data.map(data => data.nome);
console.log(dataMap)

// const dataMapJoin = data.map(data => [data.nome, data.salary].join(' | '))
console.log(dataMapJoin)

//Filtrar dados da array
const dataFiltered = data.filter(data => data.nome === 'Leandro')
console.log(dataFiltered)

const dataAgeMoreThanTen = data.filter(data => data.age < 20)
console.log(dataAgeMoreThanTen)

//Filtrar o primeiro retorno que atenda determinada condição
const firstDataFiltered = data.find(data => data.nome === 'Elisangela')
console.log(firstDataFiltered)


//Somar 10 anos em cada idade 
const sumTenYears = data.map(data => data.age + 10);
console.log(sumTenYears)


//Verificar o tamanho do array
const arrLength = data.length;
console.log(arrLength)

// Ordenar retorno da array (menor para o maior)
const arrOrderedBySalary = data.sort((a, b) => a.salary - b.salary);
console.log(arrOrderedBySalary)

//Ordenar retorno da array (maior para o menor)
const arrOrderedBySalaryLargestToSmallest = data.sort((a, b) => b.salary - a.salary);
console.log(arrOrderedBySalary)

// Calcular total de salários
const totalSalary = data
    .reduce((acc, value) => acc + value.salary, 0)
console.log(totalSalary)

// Ordenar dados do array por nome
const orderByName = data
    .sort((a, b) => a.nome > b.nome ? -1 : 1)
console.log(orderByName)

// Converter array em String
const convertArrayToString = data.map(data => [data.nome, data.salary].join(', '))
console.log(convertArrayToString)

