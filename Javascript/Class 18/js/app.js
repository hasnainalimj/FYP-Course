// var plan1 = {
//     name: '',
//     space: '',
//     price: ''
// }

// var plan2 = {
//     name: '',
//     space: '',
//     price: ''
// }

// var plan3 = {
//     name: '',
//     space: '',
//     price: ''
// }

function CreatePlans(name, space, price) {
    this.name = name
    this.space = space
    this.price = price
}

var plan1 = new CreatePlans('Basic', '2GB', 250)
// console.log("plan1", plan1)
var plan2 = new CreatePlans('Amature', '2GB', 250)
// console.log("plan2", plan2)
var plan3 = new CreatePlans('Pro', '2GB', 250)
// console.log("plan3", plan3)

function Factory(brand, productName, price) {
    this.brand = brand
    this.productName = productName
    this.price = price
    this.calcAnnual = function () {
        return price * 12
    }
}

Factory.prototype.calculateDiscount = function () {
    return 'Calculating Discount.....'
}

Factory.prototype.flag = true
Factory.prototype.digits = 123123
Factory.prototype.arr = []
Factory.prototype.obj = {}

var product1 = new Factory('Gucci', 'T-Shirt', 2000)
// console.log("product1", product1)
// console.log("product1", product1.__proto__.calculateDiscount())
var product2 = new Factory('Gucci', 'T-Shirt', 4000)
// console.log("product2", product2.calcAnnual())
var product3 = new Factory('Gucci', 'T-Shirt', 7000)
// console.log("product3", product3.calcAnnual())

var data = {
    name: 'Hasnain Ali',
    phone: '12312321321'
}

// var isFind = 'name' in data
var isFind = 'age' in data

// console.log("isFind", isFind)

var found = data.hasOwnProperty('age')
// console.log("found", found)

var temp = [
    {
        string: 'Abc',
        number: 123,
        bool: false,
        arr: [
            {
                string: 'Abc',
                number: 123,
                bool: false,
                arr: ['Developers', 'Academy', 'And', 'SoftHub']
            }
        ]
    }
]

// for (var i = 0; i < temp.length; i++) {
//     for (var j = 0; j < i.length; j++) {
//         if (typeof arr[i] == "object") {
//             if (typeof arr[i, j] == "object") {
//                 console.log(arr[i])
//             }
//         }
//     }
// }

// for (var i = 0; i < temp.length; i++) {
//     for (var j = 0; j < temp[i].arr.length; j++) {
//         for (var k = 0; k < temp[i].arr[j].arr.length; k++) {
//             console.log(temp[i].arr[j].arr[k])
//         }
//     }
// }

// window.location.assign("http://www.me.com") //navigate to specific route
// window.location.assign("http://www.me.com/lojack.html#guarantee");

// window.location.replace("https://www.google.com"); replace current route state
// window.location.reload(); //reload your page
// history.back(); go to previous route
// history.forward(); go to next route
// history.go(-3); nevigate to specific route postive for forward and negative for backward
// document.referrer; return current route
// window.open(); //open new window or tab

// var monkeyWindow = window.open();
// var windowContent = "<h1>Capuchin monkey</h1><img src= 'monkey.jpg'><p>The word capuchin derives from a
// group of friars<br>named the Order of Friars Minor Capuchin who wear<br>brown
// robes with large hoods covering their heads.</p>";
// monkeyWindow.document.write(windowContent); //Open new window with some content

// window.open("monk.html", "win1", "width=420,height=380"); //Open window with custom dimensions
// window.open("", "", "width=420,height=380,left=200,top=100");
