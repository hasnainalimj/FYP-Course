//Get all elements from the document

// var pTags = document.getElementsByTagName('p');
// console.log("pTags", pTags)

// for(var i=0; i<pTags.length; i++){
//     if(i % 2  == 0) pTags[i].style.color = 'red'
//     else pTags[i].style.color = 'blue'
// }

//Get all the elements from inside any specific part of the document 

// var parent = document.getElementById('parent')
// // console.log("parent", parent)

// var specificTags = parent.getElementsByTagName('p')
// // console.log("specificTags", specificTags)

// for(var i=0; i<specificTags.length; i++){
//     specificTags[i].style.fontSize = '20px'
//     specificTags[i].style.fontWeight = 'bold'
// }


//THE DOM
// console.log(document)

var shoppingLink = document.getElementById('shoppingLink')
// console.log("shoppingLink", shoppingLink)
// var attributes = shoppingLink.getAttribute('href')
// var id = shoppingLink.getAttribute('id')
// console.log("id", id)
// console.log("attributes", attributes)
// var classAttribute = shoppingLink.getAttribute('class')
// console.log("classAttribute", classAttribute)

//hasAttribute

var check = shoppingLink.hasAttribute('id')
var check = shoppingLink.hasAttribute('class')

//return boolean

// console.log("check", check)

//setAttribute
shoppingLink.setAttribute('class','abc')
shoppingLink.setAttribute('class' , 'xyz')