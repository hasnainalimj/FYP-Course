// var name1 = "Hasnain Ali"
// var name2 = "Faizan"
// var name3 = "Ali"

var names = ['Hasnain Ali', 'Faizan', 'Ali'];
// console.log("TCL: names", names)
var age = [24, 20, 20]
// console.log("TCL: age", age)

var firstElement = names[0]
var secondElement = names[1]
// console.log("TCL: secondElement", secondElement)

var infiniteIndex = names[100] //undefined
// console.log("TCL: infiniteIndex", infiniteIndex)

names[3] = "Kaleem"
names[1] = "Faizan Pervaiz"

names[100] = "Hello"

// console.log("TCL: names", names)


//Data Types
//1 String "Charectors"
//2 Number  123
//3 Object  []
//4 Boolean true/false

var multipleTypes = ["pakistan", 92, true, false, []]
// console.log("TCL: multipleTypes", multipleTypes)

var pets = [];

pets[0] = 'cat'
pets[1] = 'dog'
pets[2] = 'parrot'
// console.log("TCL: pets", pets)

//Methods of Array
//1) Push
//2) Pop
//3) Shift
//4) Unshift
//5) Splice

var cities = ['karachi', 'lahore']

//Push
cities.push("hyderabad") // add elements at the end of array
cities.push("sukkur", "rawalpindi", "multan") // returns new lenght of array

//Pop
cities.pop() //remove last element from array
cities.pop() //returns deleted value

//Unshift
cities.unshift("sialkot") //add elements at the beginning of array
// returns new lenght of array

//Shift
cities.shift() //remove first element from array
//returns deleted value

//Splice

//Adding elements on specific index
// cities.splice(2 , 0 , "Muree")
//return an empty array

//Deleting elements on specific index
// cities.splice(1, 2)
//return delete values in array

cities.splice(1, 2, "New cities", "Yahoooooooo")
//return delete values in array

// console.log("TCL: cities", cities)

var countries = ['Pakistan', 'China', 'Saudia']

// console.log(countries.length) //returns length of array

//-------------------------------------------------------------------------------------
//FOR LOOPS

var text = "The quick brown fox jumps over the lazy dog."

//There are 3 phases for `for loop`
//1) Intialization (from where we want to start looping)
//2) Condition (in which condition we want loop to break)
//3) Increment/Decrement (Iteration)

//1        //2          //3
// for (var i = 0; i < 5; i++) {
    // debugger
    // console.log(text)
// }


//Connection between Loop & Array

var products = ['cup cake' , 'pepsi' , '7up' , 'zinger burger' , 'dew' , 'marinda' , 'slice' , 'maza']

// console.log(products[0])
// console.log(products[1])
// console.log(products[2])
// console.log(products[3])
// console.log(products[4])
// console.log(products[5])

for(var i=0; i<products.length; i++){
    // console.log(i)
    // console.log(products[i])
}
