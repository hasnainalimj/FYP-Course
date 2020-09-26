// alert(123)

// var charectors = 'Hasnain Ali'
// var num = 123 
// var flag = true

// var name;

// name = 'Abc'

// name = 123

// + , - , * , / , % 

var n1 = 123

var n2 = 123

// console.log(n1 + n2)
// console.log(n1 - n2)
// console.log(n1 * n2)
// console.log(n1 / n2)
// console.log(n1 % n2)

var totalCost = (1 + 3) * 4;
// console.log("totalCost", totalCost)

//Comparision Operators
// <
// >
// ==
// ===
// >=
// <=
// !==

var nestedArrays = [
    1,
    'a',
    [
        2,
        'b',
        [
            3,
            'c'
        ]
    ]
]

// for (var i = 0; i < nestedArrays.length; i++) {
//     if (typeof nestedArrays[i] === 'object') {
//         for (var j = 0; j < nestedArrays[i].length; j++) {
//             if (typeof nestedArrays[i][j] === 'object') {
//                 for (var k = 0; k < nestedArrays[i][j].length; k++) {
//                     console.log(nestedArrays[i][j][k])
//                 }
//             }
//         }
//     }
// }

var cities = ['Karachi', 'Lahore', 'Rawalpindi', 'Karachi']

// var found = false

// for (var i = 0; i < cities.length; i++) {
//     if (cities[i] === 'Karachi') {
//         found = true
//         break
//     }
// }

// if (found) {
//     console.log('chaye wala biscuit')
// }

var text = 'Hy jazba junoon to himmat na  haar!'

// for(var i=0; i<text.length; i++) {
//     if(text.slice(i , i + 2) === '  '){
//         console.log('double space nh chahye smjha ya nh smjha ya smjhao akr')
//         break
//     }
// }

var data = 'the quick brown fox jumps over the lazy dog. the quick brown fox jumps over the lazy dog. the quick brown fox jumps over the lazy dog.'

// for(var i=0; i<data.length; i++){
//     if(data.slice(i, i+5) === 'brown') {
//         data = data.slice(0,i) + 'blue' + data.slice(i+5)
//     }
// }


// data = data.slice(0, data.indexOf('brown')) + 'red' + data.slice(data.indexOf('brown') + 5)
// data = data.slice(0, data.lastIndexOf('brown')) + 'red' + data.slice(data.lastIndexOf('brown') + 5)

// var result = data.replace('brown','yellow')
var result = data.replace(/brown/g, 'yellow')


// console.log("data", result)

function callDate() {
    var now = new Date();
    var theHr = now.getHours();
    var theMin = now.getMinutes();
    alert("time: " + theHr + ":" + theMin);
}

// callDate()

function callName(name){
    alert(name)
}

// callName('Faizan Pervaiz')
// callName('Faizan Pervaiz')
// callName('Faizan Pervaiz')
// callName('Faizan Pervaiz')
// callName('Faizan Pervaiz')

function checkPrice(price){
    switch(price){
        case 100:
            return 'One hundred'
            break

            case 200:
            return 'Two hundred'
            break

            default: 
            return 'Out of budget'
    }
}

var output = checkPrice(2010)
// console.log("output", output)


var global = 'Global'

function checkScope(){
    var local = 'Local'
    // console.log("checkScope -> local", local)
    // console.log(global)
    return local
}
// console.log("checkScope -> local", local)

var state = checkScope()
// console.log("state", state)