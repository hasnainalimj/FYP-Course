var string = "Hasnain Ali"
var num = 123
var bool = false
var arr = []

//Typeof

// console.log("string =>" ,typeof(string))
// console.log("num =>" ,typeof(num))
// console.log("bool =>" ,typeof(bool))
// console.log("arr =>" ,typeof(arr))

var arr = ['a','b','c','d','e','f','g','h',1,2,3,4,5,6,7,8,true,false,true,false,true,false,true,false , ['Abc'],['Xyz'],['Etc'],['...']];

var strs = []
var nums = []
var bools = []
var objs = []

for(var i=0; i<arr.length; i++){
    if(typeof(arr[i]) == "string"){
        strs.push(arr[i])
    }

    if(typeof(arr[i]) == "number"){
        nums.push(arr[i])
    }

    if(typeof(arr[i]) == "boolean"){
        bools.push(arr[i])
    }

    if(typeof(arr[i]) == "object"){
        objs.push(arr[i])
    }
}

var chunks = [strs , nums , bools , objs]
// console.log("TCL: chunks", chunks)

//Methods of Strings
//1 Slice
//2 IndexOf
//3 LastIndexOf
//4 Replace
//5 CharAt

//Slice
var messages = "Hello how are you? hope you're doing good";

// var temp = messages.slice(0,8)+"...";
// var temp = messages.slice(8)

// console.log("TCL: temp", temp)

var fullName = "shahid afridi"
var firstChar = fullName.slice(0,1).toUpperCase()
var otherChars = fullName.slice(1)
fullName = firstChar + otherChars
// console.log("TCL: fullName", fullName)
// console.log("TCL: otherChars", otherChars)
// console.log("TCL: firstChar", firstChar)


// var monthName = prompt("Enter month name");

// if(monthName.length > 3){
//     alert(monthName.slice("Abbr of month is : " + 0,3))
// }

//Checking double spaces in string

// var text = "the quick brown  fox jumps over the lazy dog."

// for(var i=0; i<text.length; i++){
//     // debugger
//     if(text.slice(i, i+2) == "  "){
//         console.log("Double spaces not allowed!");
//         break;
//     }
// }

var text = "the quick brown fox jumps over the lazy dog. the quick brown fox jumps over the lazy dog."

// for(var i=0; i<text.length; i++){
//     if(text.slice(i , i + 5) == "brown"){
//         text = text.slice(0 , i) + "red" + text.slice(i+5)
//     }
// }

// console.log("TCL: text", text)


//IndexOf
// var returnIndex = text.indexOf("brown")
// console.log("TCL: returnIndex", returnIndex)
// text = text.slice(0 , returnIndex) + "blue" + text.slice(returnIndex + 5)

//LastIndexOf
// var lastIndex = text.lastIndexOf("brown")
// console.log("TCL: lastIndex", lastIndex)
// text = text.slice(0 ,lastIndex) + "blue" + text.slice(lastIndex+5)

// console.log("TCL: text", text)

//Replace

// var result = text.replace("brown" , "orange") //replace only first occurence
// console.log("TCL: result", result)

var result = text.replace(/brown/g , "green") //replace globally
// console.log("TCL: result", result)


//CharAt
var findText = "hello how are you!";
// var find = findText.charAt(4)
// console.log("TCL: find", find)

for(var i=0; i<findText.length; i++){
    if(findText.charAt(i) == "!"){
        // console.log("Special Charectors not allowed")
        break;
    }
}
