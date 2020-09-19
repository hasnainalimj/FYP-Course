// var plan1 = 'Basic'
// var plan1Pric = '399'
// var plan1Space = '2GB'

// var plan1 = 'Basic'
// var plan1Pric = '399'
// var plan1Space = '2GB'

// var plan1 = 'Basic'
// var plan1Pric = '399'
// var plan1Space = '2GB'

// var plan1 = ['Basic', '399','2GB']
// var plan2 = ['Basic', '399','2GB']
// var plan3 = ['Basic', '399','2GB']

// plan[0]
// plan[1]
// plan[2]

var basic = {
    name: 'Basic',
    price: '200',
    space: '2GB',
    discountMonths: [1, 5]
}
// console.log("basic", basic)

var normal = {
    name: 'Normal',
    price: '300',
    space: '4GB',
    discountMonths: [2, 11]
}

var pro = {
    name: 'Pro',
    price: '500',
    space: '10GB',
    discountMonths: [3, 8]
}

// console.log(basic.name)
// console.log(basic.price)
// console.log(basic.space)

basic.price = '250'

basic.surfing = true

basic.emptyObj = {}

// basic = {
//     name : 'Abc'
// }

delete basic.emptyObj
delete basic.surfing
// console.log(basic)

// var isFind = 'title' in basic
var isFind = 'name' in basic //return boolean

// console.log("isFind", isFind)

var data = {
    message: 'Request Successfull',
    statusCode: 200,
    userData: {
        name: "Hasnain Ali",
        email: "abc@gmail.com"
    }
}

var simple = {
    sayHi: function () {
        alert('Hi')
    },
    sayBye: function () {
        alert('Bye')
    }
}
// console.log("simple", simple)

// simple.sayHi()

// simple.sayBye()

var order = {
    username: 'Hasnain Ali',
    total: 2500,
    discountMonths: [8, 10],
    discountPercentPrice: 0.9
}

function makeDiscount(order) {
    var currentMonth = new Date().getMonth() + 1
    var found = false
    for (var i = 0; i < order.discountMonths.length; i++) {
        if (order.discountMonths[i] === currentMonth) {
            found = true
            break
        }
    }

    if (found) {
        return order.total * order.discountPercentPrice
    }
    return order.total
}

var discount = makeDiscount(order)
// console.log("discount", discount)

var plan1 = {
    name: "Basic",
    price: 3.99,
    space: 100,
    transfer: 1000,
    pages: 10,
    discountMonths: [9, 7],
    calcAnnual: function (percentIfDisc) {
        var bestPrice = plan1.price;
        var thisMo = new Date().getMonth() + 1

        for (var i = 0; i < plan1.discountMonths.length; i++) {
            if (plan1.discountMonths[i] === thisMo) {
                bestPrice = plan1.price * percentIfDisc;
                console.log("bestPrice", bestPrice)
                break;
            }
        }
        return bestPrice * 12;
    }
}

var plan1 = {
    name: "Basic",
    price: 3.99,
    space: 100,
    transfer: 1000,
    pages: 10,
    discountMonths: [9, 7],
    calcAnnual: function (percentIfDisc) {
        var bestPrice = this.price;
        var thisMo = new Date().getMonth() + 1

        for (var i = 0; i < this.discountMonths.length; i++) {
            if (this.discountMonths[i] === thisMo) {
                bestPrice = this.price * percentIfDisc;
                console.log("bestPrice", bestPrice)
                break;
            }
        }
        return bestPrice * 12;
    }
}

var result = plan1.calcAnnual(0.8)
// console.log("result", result)

var data = {
    age: 25,
    phone: '023210302013',
    scope: function () {
        console.log(this.age)
    }
}
// data.scope()

function nonParameter() {
    console.log('yes')
}

// nonParameter()

function parameter(name) {
    console.log(name)
}

// parameter('Pakistan')

