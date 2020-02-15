//Unfamilar Operators
//Post Increment/Decrement
//Pre Increment/Decrement

var num = 5;

// num++; //Post Increment
// console.log("TCL: num", num++)
// console.log(num)

// num--; //Post Decrement
// console.log(num--)
// console.log(num);

// ++num; //Pre Increment
// console.log(++num)
// console.log(num)

// --num; //Pre Decrement
// console.log(--num)
// console.log(num)

// ++num //6
// ++num //7
// ++num
// --num
// ++num
// ++num

// console.log(num)
var n1 = 5;
var n2 = 0;
                        //6   +  0     +   6    -  1
// var totalCount = ++n1 + n2++ + n1++ - n2;
// console.log("TCL: totalCount", totalCount)

                    //5   *   4    +   0     +  1    -  4
// var totalCount = n1 * --n1 + n2++ + n2++ - n1
// console.log("TCL: totalCount", totalCount)

// var totalCount = n1 / n1 + n1++ - --n1 + n2++ + ++n2 - ++n2;
// console.log("TCL: totalCount", totalCount)

// console.log(5++) //needs to be create a variable first

// var statement = 5 * (10 + 5);
// console.log("TCL: statement",/ statement)

// var statement = 1 + 3 * 4; 
// var statement = (1 + 3) * 4; 
// console.log("TCL: statement", statement)

// var statement = ((2 * 4) * 4) + 2;
// console.log("TCL: statement", statement)

// var statement = (2 * 4) * (4 + 2);
// var statement = 2 * 4 * 4 + 2; //34
// console.log("TCL: statement", statement)


//Concatenation with strings
var name = 'Ali';
// console.log("TCL: name", name)
var int = 5
// console.log("TCL: nt", int)

// console.log(name + int)
// console.log(name , int)
// alert(name + int)
// alert(name + " " + int)

var n1 = "5";
var n2 = 5

// console.log(n1 + n2)
// console.log(n1 / n2)
// console.log(n1 - n2)
// console.log(n1 * n2)


//Prompts

// var name = prompt("Enter your name?")
// console.log(name)

// var age = +prompt("Enter your age");
// console.log("TCL: age", age)

// var num1 = +prompt("Enter num1")
// var num2 = +prompt("Enter num2")

// console.log(num1 + num2)

// var nation = prompt("Enter your nation", "Pakistan") //default value
// console.log("TCL: nation", nation)

//window.prompt //old approach

// var age = +prompt("Enter your age!")
// console.log("TCL: age", age)

//Comparisions Operators
//1 ==
//2 >=
//3 <=
//4 >
//5 <
//6 !==
//7 ===

// if(age == 10){
//     console.log("that's your childhood")
// }

// if(age >= 18){
//     console.log("now you're adult")
// }

// if(age <= 17){
//     console.log("bacchy ho beta");
// }

// if(age > 17){
//     console.log("now youre adult")
// }

// if(age < 18){
//     console.log("bacchy ho beta")
// }

// if(age !== 20){
//     console.log("good one")
// }

// if(age === 17){
//     console.log("correct both type and value")
// }


// var marks = 0;
// var a1 = prompt("html stands for?")
// var a2 = prompt("css stands for?")
// var a3 = prompt("js stands for?")

// if(a1 === 'hyper text markup language'){
//     ++marks
// }

// if(a2 === 'cascading stylesheet'){
//     ++marks
// }

// if(a3 === "javascript"){
//     ++marks
// }

// console.log("total marks : " , marks);