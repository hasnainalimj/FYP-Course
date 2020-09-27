var abc = 123
var abc = 'abc'
abc = 'xyz'
// console.log("abc", abc)


//LET
let name = '123'
name = '232323'
// var name = 'xyz'
// console.log("name", name)


//CONST
const age = 23
// age = 25


//MAP
var temp = ['Karachi', 'Lahore', 'Sukkur', 'Islamabad']

// for(var i=0; i<temp.length; i++) {
//     console.log(temp[i])
// }

temp.map(function (value, ind) {
    // console.log("value", value)
    // if(value == 'Karachi') {
    //     console.log('yes')
    // }
    // else {
    //     console.log("=>",value, ind)
    // }
})


//FILTER
var data = ['pepsi', 'dew', 'marinda', '7up', 'pepsi', 'dew', 'coca cola']

// for(let i=0; i<data.length; i++) {
//     if(data[i] == 'dew'){
//         console.log(data[i])
//     }
// }

const arr = data.filter(function (value, ind) {
    return value === 'pepsi'
})

// console.log("arr", arr)

//TEMPLE LITERALS
const parent = document.getElementById('root')

var h1 = document.createElement('h1')
h1.innerHTML = 'Imu bhai zindabad'
parent.appendChild(h1)

parent.innerHTML += `<h1>Pakistan Zindabad</h1>`

const title = 'We are learning ES6'

parent.innerHTML += `<p style="color : red">${title}</p>`

const baseURL = 'https://www.google.com/'

// const api = baseURL + "search='avengers'"
const api = `${baseURL}search='avengers'`
// console.log("api", api)


//FOR EACH
var data = ['pepsi', 'dew', 'marinda', '7up', 'pepsi', 'dew', 'coca cola']

data.forEach(function (value, ind) {
    // console.log(value)
})


//DEFAULT PARAMETERS
function callUser(phone = 'Unknown') {
    alert(`Calling: ${phone}`)
}

// callUser() //Take default value
// callUser('Amreen') //Take parameter value

//QUERY SELECTOR
const element = document.querySelector('#root')
// console.log("element", element)


//SPREAD OPERATORS
var arr1 = [1, 2, 3, 4, 5]
var arr2 = [6, 7, 8, 9, 0]

// var joined = [arr1, arr2]
// console.log("joined", joined)

// var joined = [...arr1, ...arr2]
var joined = [...arr1, ...arr2, 'a', 'b', 'c']

// console.log("joined", joined)

var obj1 = {
    email: 'mjhasnain15@gmail.com'
}

var obj2 = {
    username: 'Hasnain Ali'
}

const comObj = {
    ...obj1,
    ...obj2,
    age: 25
}

// console.log("comObj", comObj)

//REVERSE
var nums = [5, 4, 3, 2, 1]

var result = nums.reverse()
// console.log("result", result)

//INCLUDES
var data = ['pepsi', 'dew', 'marinda', '7up', 'pepsi', 'dew', 'coca cola']

var result = data.includes('7up') //returns true
var result = data.includes('sting') //returns false

// console.log("result", result)


//SET
var content = new Set([1,2,3,4,5])

// console.log("content", content.size)

content.add(6)

// content.clear()

// console.log("content", content.entries())

content.forEach(function(val, ind){
    console.log(val)
})

var check = content.has(25)
// console.log("check", check)

content.delete(3)

console.log("content", content)

var replicable = ['a','a','a','b','b','c','d','d']

var fixed = new Set(replicable)
// console.log("fixed", fixed)


//MAP OBJECT
var myMap = new Map();

myMap.set('name', 'das')

var result = myMap.get('name')
console.log("result", result)

console.log("myMap", myMap.size)

// myMap.clear()

for(value of myMap){
    // console.log('value' , value)
}