// function checkEmail() {
//     var txtEmail = document.getElementById('txtEmail').value
//     if (txtEmail) {
//         console.log(txtEmail)
//         document.getElementById('txtEmail').style.backgroundColor = 'white'
//     } else {
//         // document.getElementById('txtEmail').focus()
//         document.getElementById('txtEmail').style.backgroundColor = 'red'
//         // alert('Cant be empty!')
//     }
// }

// function checkForSelection(e) {
//     e.preventDefault()
//     // console.log("checkForSelection -> e", e)
//     if (!document.getElementById("states").selectedIndex) {
//         alert("Please select a state.");
//     }
// }

// function validateRadios(e) {
//     e.preventDefault()

//     var radios = document.getElementsByName("r1");
//     for (var i = 0; i < radios.length; i++) {
//         if (radios[i].checked) {
//             return true;
//         }
//     }
//     alert("Please check one.");
//     return false;
// }

// function validateZipCode() {
//     var zipCode
//     if (!zipCode) {
//         alert('cant be empty')
//     } else {
//         if (zipCode.length > 5 || zipCode.length < 5) {
//             alert('Invalid format')
//         } else {
//             console.log('submitted')
//         }
//     }
// }

// function checkFormatOfEmail() {
//     var email = 'mjhasnain15@'
//     var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//     var result = regex.test(email)
//     console.log("checkFormatOfEmail -> result", result)
// }

// checkFormatOfEmail()

// aler(123)

// console.log('yes')

// try {
//     aler(123)
// } catch (error) {
//     console.log("error", error)
// }

// console.log('rest of the code')

// function checkErrors() {
//     var age = 15

//     try {
//         if(age === 20){
//             throw 'your age is 20 you re not allowed'
//         }
//         if(age == 15) {
//             throw 'your age is 15 you re not allowed'
//         }
//     } catch (error) {
//         console.log("checkErrors -> error", error)
//     }
// }

// checkErrors()

// console.log(localStorage)

//setItem
//getItem
//removeItem

localStorage.setItem('name', 'developers academy & softhub')
localStorage.setItem('phone', 3102932665)
localStorage.setItem('isActive', true)

var name = localStorage.getItem('name')
var phone = localStorage.getItem('phone')
var isActive = localStorage.getItem('isActive')

// console.log("name", name)
// console.log("phone", phone)
// console.log("isActive", isActive)

// localStorage.removeItem('name')

// localStorage.clear()

localStorage.setItem('arr', JSON.stringify([12, 123, 1234]))
localStorage.setItem('obj', JSON.stringify({ name: 'Hasnain Ali' }))

var arr = JSON.parse(localStorage.getItem('arr'))
var obj = JSON.parse(localStorage.getItem('obj'))

// console.log("arr", arr)
// console.log("obj", obj)
