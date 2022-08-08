const front = ['Vue', 'Angular', 'React']
const back = ['Java', 'Node']

//Fazendo o espalhamento (spread) dos dois array em um só
const stacks = [...front, ...back]

console.log(stacks) //[ 'Vue', 'Angular', 'React', 'Java', 'Node' ]

console.log([...'teste']) //[ 't', 'e', 's', 't', 'e' ]