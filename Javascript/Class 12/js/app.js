// var myAge = +prompt("enter your age");
// var currentYear = new Date().getFullYear();
// console.log("your birth year is : " , currentYear - myAge)


//Reading field values

// console.log("document", document)
var data = document.getElementById("txtInput")
// console.log("data", data)

function getValue() {
    var text = document.getElementById('text')
    // console.log("getValue -> text", text)
    if (text.value) {
        console.log(text.value)
    } else {
        alert('field cant be empty!')
    }
}

//Setting up field values

function getMySim() {
    var txtCode = document.getElementById('txtCode')
    var txtSim = document.getElementById('txtSim')

    switch (txtCode.value) {
        case '0310':
            txtSim.value = "Zong"
            break;
        case '0300':
            txtSim.value = "Jazz"
            break;
        case '0345':
            txtSim.value = "Telenor"
            break;
        case '0333':
            txtSim.value = "Ufone"
            break;
        default:
            txtSim.value = "PTCL"
    }
}

// var charectors = "the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog"
// var para = document.getElementById('paragraph')

// para.innerHTML = charectors.slice(0,30)+"..."

function readMore() {
    para.innerHTML = charectors
}

function readLess() {
    para.innerHTML = charectors.slice(0, 30) + "..."
}

// var coverPhoto = document.getElementById('coverPhoto')
// coverPhoto.className = 'borderStyle applyBorderRadius'

function toggleBtns(showId, hideId) {
    var showBtn = document.getElementById(showId)
    var hideBtn = document.getElementById(hideId)

    showBtn.style.display = "block"
    hideBtn.style.display = "none"
}

// var profiler = document.getElementById('profiler')
// profiler.className += ' applyBorderRadius'

function swapImages(state) {
    var imgOne = document.getElementById("imgOne");

    if (state) {
        imgOne.src = "2.jpg"
    } else {
        imgOne.src = "1.jpg"
    }
}


function getAddress() {
    var link = document.getElementById("link1");
    var address = link.href;
}

// font-size //fontSize
// background-color //backgroundColor

var paras = document.getElementsByClassName('jumbo')

for(var i=0; i<paras.length; i++){
    // paras[i].style.color = "red"
    if(i%2 == 0){
        paras[i].style.color = "red"
    }else {
        paras[i].style.color = "blue"
        paras[i].innerHTML = 'Zindabad'

    }
}

// var tags = document.getElementsByTagName('p')
// console.log("tags", tags)

var parent = document.getElementById("parent");

var allPs = parent.getElementsByClassName("jumbo")
// console.log("allPs", allPs)
