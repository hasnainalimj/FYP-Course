var users = localStorage.getItem('users')

function checkPin() {
    var pin = document.getElementById('pin').value

    if (JSON.parse(users)) {
        var data = JSON.parse(users)
        if (data.length) {
            for (var i = 0; i < data.length; i++) {
                if (pin === data[i].pin) {
                    document.getElementById('root').style.display = 'block'
                } else {
                    alert('Invalid pin')
                }
            }
        } else {
            var payload = {
                pin: pin,
                amount: 2000
            }
            localStorage.setItem('users', JSON.stringify([payload]))
        }
    } else {
        var payload = {
            pin: pin,
            amount: 2000
        }
        localStorage.setItem('users', JSON.stringify([payload]))
    }
}

function withDraw(amount) {
    var pin = document.getElementById('pin').value
    var data = JSON.parse(localStorage.getItem('users'))
    for (var i = 0; i < data.length; i++) {
        if (pin === data[i].pin) {
            if (amount <= data[i].amount) {
                data[i] = { pin, amount: data[i].amount - amount }
                localStorage.setItem('users', JSON.stringify(data))
            } else {
                alert('you dnt hve sufficient rokra')
                break
            }
        } else {
            alert('Invalid pin')
        }
    }
}

function showPanel() {
    document.getElementById('inputs').style.display = 'block'
}

function customDraw() {
    var pin = document.getElementById('pin').value
    var amount = document.getElementById('txtRs').value
    var data = JSON.parse(localStorage.getItem('users'))
    for (var i = 0; i < data.length; i++) {
        if (pin === data[i].pin) {
            if (amount <= data[i].amount) {
                data[i] = { pin, amount: data[i].amount - amount }
                localStorage.setItem('users', JSON.stringify(data))
            } else {
                alert('you dnt hve sufficient rokra')
                break
            }
        } else {
            alert('Invalid pin')
        }
    }
}