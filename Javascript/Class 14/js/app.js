// var tag = document.getElementById('myPara')

// var allAttributes = tag.attributes
// console.log("allAttributes", allAttributes)

// var childs = tag.childNodes
// console.log("childs", childs)


//The DOM:
// Adding nodes

var dropoffLocation = document.getElementById('dropoffLocation');
// console.log("dropoffLocation", dropoffLocation)
var h1 = document.createElement('h1')
h1.innerHTML = 'Hello World'
h1.setAttribute('class', 'text')
var firstChild = dropoffLocation.firstChild
// console.log("firstChild", firstChild)
// dropoffLocation.appendChild(h1)
dropoffLocation.insertBefore(h1, firstChild)
// console.log("h1", h1)


var img = document.createElement('img')
// img.src = '1.png'
img.setAttribute('src', '1.png')
img.setAttribute("border", "10");
// console.log("img", img)

dropoffLocation.appendChild(img)


//Removing elements from html
// console.log(dropoffLocation)
var para = document.getElementById('para')
dropoffLocation.removeChild(para)

var names =
    [
        ["Ali", "Ahmed", "Shan", "Zia", "Sana", "Khan"],
        ["Ali", "Ahmed", "Shan", "Zia", "Sana", "Khan"],
        ["Ali", "Ahmed", "Shan", "Zia", "Sana", "Khan"],
        ["Ali", "Ahmed", "Shan", "Zia", "Sana", "Khan"]
    ];

function replaceNames(replaceWith, newValue) {
    var arr = []
    var nestedArray = []

    for (var i = 0; i < names.length; i++) {
        for (var j = 0; j < names[i].length; j++) {
            if (names[i][j] === replaceWith) {
                nestedArray.push(newValue)
            } else {
                nestedArray.push(names[i][j])
            }
        }
        arr.push(nestedArray)
        nestedArray = []
    }
    return arr
}

var result = replaceNames('Sana', 'Zeeshan')
console.log("result", result)