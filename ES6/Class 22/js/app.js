//ARROW FUNCTIONS

// console.log('global this' , this)

function calling() {
    console.log('inside simple function', this)
}

// calling()

recieving = () => {
    console.log('inside arrow function', this)
}

// recieving()

const obj = {
    simple: function () {
        console.log('simple this inside object', this)
    },
    arrow: () => {
        console.log('arrow this inside object', this)
    }
}

// obj.simple() //Depends on the scope and return you parent this
// obj.arrow() //Always returns you grand parent this

function sum(n1, n2) {
    console.log(n1 + n2)
}

// sum(5,5)

subtract = (n1, n2) => {
    console.log(n1 - n2)
}

// subtract(5,2)

//CALLBACK FUNCTIONS

// function makeCall(cb) {
//     if (typeof cb !== 'function') return
//     cb()
// }

// fetch().then(() => {})

// makeCall(() => alert('Cb Called'))

// fun1 = (fun2, fun3) => {
//     fun2(fun3)
// }

// fun1(function (fun3) {
//     console.log('cb f2')
//     fun3()
// }, function () {
//     console.log('cb f3')
// })


//PROMISE

// console.log(1)
// setTimeout(() => {
//     console.log(2)
// }, 1000)
// console.log(3)

// console.log(1)
// new Promise((resolve, reject) => {
//     try {
//         setTimeout(() => {
//             console.log(2)
//             resolve()
//         }, 1000)
//     } catch (error) {
//         reject()
//     }
// }).then(() => {
//     console.log(3)
// })

const output = new Promise((resolve, reject) => {
    var age = 20
    if (age === 20) {
        resolve('He can join us')
    } else {
        reject('Not allowed')
    }
})

// console.log("output", output)

// output.then(result => {
//     console.log('=-------------->', result)
// })


//PROMISE ALL
// const promiseOne = new Promise((resolve, reject) => {
//     resolve('Promise one resolved')
// })

// const promiseTwo = new Promise((resolve, reject) => {
//     resolve('Promise two resolved')
// })

// const promiseThree = new Promise((resolve, reject) => {
//     resolve('Promise three resolved')
// })

// const allResults = Promise.all([promiseOne, promiseTwo, promiseThree])

// allResults.then(results => {
//     console.log("results", results)
// })

// Promise.all([promiseOne, promiseTwo, promiseThree]).then(res => {
//     console.log(res)
// })

//PROMISE RACE  

// const promiseOne = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('one execute')
//     }, 500)
// })

// const promiseTwo = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('two execute')
//     }, 1000)
// })

// const promiseThree = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('three execute')
//     }, 1500)
// })

// const winner = Promise.race([promiseOne, promiseTwo, promiseThree])

// winner.then(result => {
//     console.log(result)
// })

// Promise.race([promiseOne, promiseTwo, promiseThree]).then(res => {
//     console.log(res)
// })


//THREADS
// setTimeout(function() {
//     alert('hello')
// }, 2000)

// const timer = setInterval(() => {
//     console.log('123')
// }, 2000)

// setTimeout(() => {
//     clearInterval(timer)
// }, 10000);
