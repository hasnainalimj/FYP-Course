// getCurrentYear()

// var currentDate = new Date();
// var currentYear = currentDate.getFullYear()
// console.log("currentYear", currentYear)

function getCurrentYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear()
    console.log("currentYear", currentYear)
}

// getCurrentYear()

//There are two types of functions
//1 Parameterize
//2 Non-Parameterize

//Non-Parameterize
function sayHi() {
    alert("Hi")
}

//Parameterize
function sayHelloTo(name) {
    console.log("Hello : ", name)
}


// sayHi()
// sayHelloTo("Imran Khan")
// sayHelloTo(123)
// sayHelloTo()

function sumOfNumbers(num1, num2) {
    console.log("Sum of 2 numbers are:", num1 + num2)
}

// sumOfNumbers(10 , 20)

//Return Statement

var name = "Abc"

function checkScope() {
    var lastName = "xyz"
    return lastName
    console.log("disable")
}

// console.log(lastName)

// checkScope()
// console.log("result", result)

function checkType(value) {
    if (typeof (value) === "string") {
        console.log("it's a valid type")
        return
    }

    console.log("rest of the code is running here")
}

// checkType(123)

// var city = prompt("Enter your city name.........")

function validateCity() {
    if (!city) {
        return alert("This field is required")
    }
    console.log("your city is : ", city)
}

// validateCity()

//Switch Statements

// var day = +prompt("Enter day number")

// if(day === 1){
//     console.log("monday")
// }else if(day === 2){
//     console.log("tuesday")
// }else if(day === 3){
//     console.log("wednesday")
// }else{
//     console.log("others day")
// }

// switch(day){
//     case 1:
//         console.log("monday")
//         break;

//     case 2:
//         console.log("tuesday")
//         break;

//     case 3:
//         console.log("wednesday")
//         break;

//     default:
//         console.log("others day")
// }

function calculator(num1, num2, operator) {
    switch (operator) {
        case "+":
            console.log(num1 + num2);
            break

        case "-":
            console.log(num1 - num2);
            break

        case "*":
            console.log(num1 * num2);
            break

        case "/":
            console.log(num1 / num2);
            break

        default:
            console.log("invalid operator")
    }
}

// calculator(5 , 5 , "/")

//While Loops

// for(var i=0; i<10; i++){
//     console.log(i)
// }

// var age = 20;
// while(age<25){
//     console.log(age);
//     age++
// }


//Do While Loops

// var i =0;
// do{
//     console.log("i" , i);
//     i++
// }while(i<0)


//Events
// 1 Link
// 2 Button
// 3 Mouse
// 4 Fields

function saySomething(){
    alert("Islamabad United Winner of PSL 2020")
}

function imageIn(){
    console.log("inside in image")
}

function imageOut(){
    console.log("outside of image")
}