const data = {
    name: 'Leandro',
    surname: 'Bernardo',
    age: 38,
    blog: 'meublog.com',
    social: {
        twitter: '@lebersa',
        facebook: '/facedoleandro'
    }
}

//Sem destructuring
// const name = data.name;
// const social = data.social.twitter;

// console.log(name, social);

//Com destructuring
const { name, surname, social: { twitter, facebook } } = data
console.log(name, twitter);