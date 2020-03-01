// consoleName()

//Math Functions

//1) Round
//2) Floor
//3) Ceil
//4) Random

//Round
var n1 = 23.51
var n1 = 23.49

// console.log(Math.round(n1))

//Floor
var n2 = 23.56
var n2 = -23.56

// console.log(Math.floor(n2))

//Ceil
var n3 = 23.20
var n3 = -23.20

// console.log(Math.ceil(n3))


//Random

// console.log(Math.random()) //Generate random numbers b/w range of 0 to 1

var randomNumber = Math.random() * 1000

// console.log("randomNumber", Math.round(randomNumber))


//Parsing

//1 parseInt
//2 parseFloat
//3 toString
//4 Number
//5 toFixed

//ParseInt

var n4 = '2000'
var chrs = 'abc'

// console.log("chrs", parseInt(chrs)) //returns NaN in case of charectors
// console.log("n4", parseInt(n4))

//ParseFloat

var n5 = '22.22'
var chrs2 = 'xyz'

// console.log(parseInt(n5)) //consider only first values before .
// console.log(parseFloat(n5)) 
// console.log(parseFloat(chrs2))


//ToString

var n6 = 123123
var arr = [123, 123]

// console.log("n6", n6)
// console.log(n6.toString())
// console.log(arr.toString())


//Number

var n7 = "1123.123"
var chrs3 = "qwerty"

// console.log(Number(n7))
// console.log(Number(chrs3))


//ToFixed
var n8 = 12.12312321321321323123213213

// console.log("n8", Number(n8.toFixed(3)))


//Date & Time

var date = new Date()
// console.log("date", date.toString().slice(0,10))
var day = date.getDay() //starts from 0 means sunday
// console.log("day", day)

var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var nameOfToday = dayNames[day];
// console.log("nameOfToday", nameOfToday)

var month = date.getMonth()//months starts from 0 to 11
// console.log("month", month)

var year = date.getFullYear()
// console.log("year", year)

var d = date.getDate()
// console.log("d", d)

var hours = date.getHours()
// console.log("hours", hours)

var minutes = date.getMinutes()
// console.log("minutes", minutes)

var seconds = date.getSeconds()
// console.log("seconds", seconds)

var milisecs = date.getMilliseconds()
// console.log("milisecs", milisecs)

var time = date.getTime() //returns miliseconds since jan 1 1970
// console.log("time", time)



//Set up date & time

var doomsday = new Date("June 30, 2035");
// console.log("doomsday", doomsday)

// console.log(doomsday.getTime())


var newDate = new Date()

newDate.setFullYear("2021", "04", "17")

newDate.setHours("12", "00", "00")
// console.log("newDate", newDate)





//Functions

// var input = prompt("enter your name")
// if(input.length == 0){
//     console.log("enter name please")
// }else{
//     console.log("input", input)
// }

function consoleName() {
    var input = prompt("enter your name")
    if (input.length == 0) {
        console.log("enter name please")
    } else {
        console.log("input", input)
    }
}

//Calling function
// consoleName()
// consoleName()
// consoleName()
// consoleName()
// consoleName()
// consoleName()
// consoleName()
// consoleName()
// consoleName()
