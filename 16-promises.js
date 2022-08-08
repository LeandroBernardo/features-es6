/**
 * Promisses: Um objeto que visa realizar uma ação que ainda não foi finalizada, mas não futuro será realizada 
 * (Uma promessa: ainda não fiz mas vou fazer)
 * Trabalha com dados assincronos
 * 
 * Um Promise está em um destes estados:
        pending (pendente): Estado inicial, que não foi realizada nem rejeitada.
        fulfilled (realizada): sucesso na operação.
        rejected (rejeitado): falha na operação.
 */


var showMessage = new Promise((resolve, reject) => {
    //Numa funçaõ de setTimeout, a promisse é resolvida em um determinado tempo (simulando o retorno do servidor)
    setTimeout(() => {
        if (true) {//trocar pra false pra simular o erro
            resolve('Hi! Welcome to the jungle!!')
        } else {
            reject(`It doesn't work`)
        }
    }, 2000) //2000 = 2 segundos
})


//Utilizando respostas encadeadas é possível trabalhar com o retorno da Promise
//No exemplo abaixo, é recebida a mensagem e em seguida passamos pra maisculo todo o retorno
showMessage
    .then(data => {
        console.log(data)
        return data.toUpperCase();
    })
    .then(data =>
        console.log(data)
    )
    .catch(err => console.log(err))