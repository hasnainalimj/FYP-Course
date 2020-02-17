//Unfamilar Operators

//Post Increment/Decrement
//Pre Increment/Decrement

var num = 5;

// num++; //5

// console.log(num++)
// console.log(num)

// num--; //5

// console.log(num--) //5
// console.log(num)

// ++num; //6

--num; //4

// console.log("TCL: num", num)

var n1 = 5;
var n2 = 6;

// 5   +  6   -  6 +   6
// var total = n1 + ++n1 - n2 + n2++;

//  5 +    6   -  6     +    5   -  5
var total = n1 + ++n1 - n1++ + --n2 - n2--;
// console.log("TCL: total", total)

// var statement = (2 + 2) * 5

var statement = (2 + 2) * (5 + 1);
// console.log("TCL: statement", statement)

var charectors = "Pakistan";
// console.log("TCL: charectors", charectors)

var integer = 5;
// console.log("TCL: integer", integer)

// console.log(charectors + integer)
// console.log(charectors , integer)

var num1 = "2";
var num2 = "2";

// console.log(num1 + num2)
// console.log(num1 - num2)
// console.log(num1 * num2)
// console.log(num1 / num2)

// alert("hi")
// var name = prompt("Enter your name" , 'My Name')
// console.log("TCL: name", name)

// var age = +prompt("enter your age")
// console.log("TCL: age", age)

//Comparision Operators

// ==
// <=
// >=
// >
// <
// !==
// ===

// var age = +prompt("enter your umar")

// if(age == 10){
//     console.log("dil to baccha hy ji");
// }

// if(age <= 17){
//     console.log("bara hokr ao");
// }

// if(age >= 18){
//     console.log("nic banwa lo");
// }

// if(age > 17){
//     console.log("nic banwa lo");
// }

// if(age < 18){
//     console.log("bacchy ho beta");
// }

// if(age !== 50){
//     console.log("mout abhi door hy");
// }

// if(age === 25){
//     console.log("both value and type correct");
// }

// if(age == 20){
//     console.log("your age is 20")
// }else{
//     console.log("i dont know")
// }

// var score = 0;

// var ans1 = prompt("ye kis ka code hy 0315")
// var ans2 = prompt("ye kis ka code hy 0300")
// var ans3 = prompt("ye kis ka code hy 0335")
// var ans4 = prompt("ye kis ka code hy 0342")

// if(ans1 == 'zong'){
//     ++score;
// }else{
//     --score;
// }

// if(ans2 == 'jazz'){
//     ++score
// }else{
//     --score;
// }

// if(ans3 == 'ufone'){
//     ++score;
// }else{
//     --score;
// }

// if(ans4 == 'telenor'){
//     ++score;
// }else{
//     --score;
// }

// console.log("your score : " + score + " out of 4")

// var city = prompt("enter your city name")

// if(city == 'karachi'){
//     console.log("pani do kachra uthao")
// }else if(city == 'lahore'){
//     console.log("gadha khao")
// }else if(city == 'islamabad'){
//     console.log('capital city')
// }else {
//     console.log('acha hy yaha sy door ho')
// }

// if(city == 'karachi'){
//     var area = prompt('enter any area of karachi')
//     if(area == 'malir'){
//         console.log("uthao bhai kachra uthao")
//     }else{
//         console.log('safai nisf iman hy')
//     }
// }else{
//     var area = prompt('enter any area of lahore')
//     if(area == 'defence'){
//         console.log("mendak khao")
//     }else{
//         console.log("gadha khao")
//     }
// }

//Conditional Operators

//1) && AND Incase of this operator condition must be true
//2) || OR Incase of this operator atleast one condition must be true

var num1 = 5;
var num2 = 6;

// if(num1 === 5 && num2 === 6){
//     console.log("both are true")
// }else{
//     console.log("false")
// }

// if(num1 === 4 || num2 === 5){
//     console.log("both are true")
// }else{
//     console.log("false")
// }

var weight = 301;
var time = 5;
var age = 18;
var gender = "male";

// if (weight > 300 && time < 6 && age > 17 && gender === "male") {
//   alert("Come to our tryout!");
// } else {
//   alert("Come to our cookout!");
// }

var SAT = 2.5
var GPA = 2.6
var sport = 'footballs'

// if (SAT > 2.5 || GPA > 2.5 || sport === "football") {
//   alert("Welcome to Bubba State!");
// } else {
//   alert("Have you looked into appliance repair?");
// }
