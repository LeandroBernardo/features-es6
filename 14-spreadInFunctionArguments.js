function makeSandwich(bread, cheese, sauce) {
    console.log(`Your sandwich with ${bread} bread, ${cheese} cheese and ${sauce} is done!`)
}

const ingredients = ['white', 'cheddar', 'barbecue']

//Com os spread cada ingrediente é colocado de forma sequencial nos parâmetros da função makeSandwich
makeSandwich(...ingredients)