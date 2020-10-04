//What is the difference b/w forEach & map?

//What is the difference b/w map & filter?

//What are the spread operators?

//What we can do with querySelector?

//Describe these two methods Set & Map?

//Asynchronous
// console.log(1)
// setTimeout(() => console.log(2), 1000)
// console.log(3)

//FETCH
// console.log(1)
// fetch('https://jsonplaceholder.typicode.com/todos/7').then(function(response){
//     return response.json()
// }).then(function(result) {
//     console.log('2',result)
// })
// console.log(3)

//ADVANCE GET
// const email = prompt('Enter your email')
// const pass = prompt('Enter your password')
// fetch(`https://localpages.herokuapp.com/api/auth/login?email=${email}&password=${pass}`).then(function (res) {
//     return res.json()
// }).then(function (result) {
//     console.log(result)
// })

//POST
const payload = {
    firstName: 'Faizan',
    country: 'Pakistan',
    city: 'Karachi',
    profileIMG: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    phoneNumber: '2323232323',
    lastName: 'Pervaiz',
    email: 'faizanpervaiz@gmail.com',
    state: 'Sindh',
    password: '22222'
}

const formdata = new FormData()

for (let key in payload) {
    formdata.append(key, payload[key])
}

const config = {
    method: 'POST',
    redirect: 'follow',
    body: formdata
    // body : JSON.stringify(payload)
}

// fetch('https://localpages.herokuapp.com/api/auth/register', config).then(function (res) {
//     return res.json()
// }).then(function (result) {
//     console.log(result)
// })

// fetch('https://jsonplaceholder.typicode.com/photos').then(function(response){
//     return response.json()
// }).then(function(result) {
//     console.log('2',result)
// })
