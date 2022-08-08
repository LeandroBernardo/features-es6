const firstMessage = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('1ª Promise | Hi! my name is Leandro')
    }, 5000)
})

const secondMessage = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('2ª Promise | Hi! my surname is Bernardo')
    }, 1000)
})


/**
 * All: Indica que todas as promisses serão resolvidas por ordem de tempo de retorno
 */
// Promise
//     .all([firstMessage, secondMessage])
//     .then(responses => {
//         console.log(responses)
//     })
//     .catch(error => console.log(error))


/**
 * Race: Executa apenas o primeiro retorno da promise, em caso de diversas chamadas simultâneas
 */
Promise
    .race([firstMessage, secondMessage])
    .then(responses => {
        console.log(responses)
    })
    .catch(error => console.log(error))