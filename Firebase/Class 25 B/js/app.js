var firebaseConfig = {
    
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()


addItem = () => {
    const item = document.querySelector('#item').value
    try {
        db.collection('todo').add({ //Add methods always generate a random id document
            item
        }).then(res => {
            console.log(res.id)
            document.querySelector('#item').value = ''
            getAllItems()
        })
    } catch (error) {
        console.log("addItem -> error", error)
    }
}

getAllItems = () => {
    const lists = document.querySelector('#lists')
    try {
        db.collection('todo').get().then(res => {
            lists.innerHTML = ''
            res.forEach(doc => {
                console.log("getAllItems -> doc", doc)
                lists.innerHTML += `<li>${doc.data().item}</li>`
            })
        })
    } catch (error) {
        console.log("getAllItems -> error", error)
    }
}

// getAllItems()

addWithMyDocId = () => {
    const myId = document.querySelector('#myId').value
    const item = document.querySelector('#item').value
    try {
        db.collection('products').doc(myId).set({
            item
        }).then(() => {
            alert('Added custom id data')
        })
    } catch (error) {
        console.log("addWithMyDocId -> error", error)
    }
}

addDataWithSetAndSaveOldData = () => {
    const myId = document.querySelector('#myId').value
    const item = document.querySelector('#item').value
    const price = document.querySelector('#price').value
    try {
        db.collection('products').doc(myId).set({
            item,
            price,
            // brand: 'Samsung'
        }, { merge: true }).then(() => {
            alert('Added custom id data with old data')
        })
    } catch (error) {
        console.log("addWithMyDocId -> error", error)
    }
}

newExampleOfSet = () => {
    try {
        var docData = {
            stringExample: "Hello world!",
            booleanExample: true,
            numberExample: 3.14159265,
            dateExample: firebase.firestore.Timestamp, //return accurate server time
            arrayExample: [5, true, "hello"],
            nullExample: null,
            objectExample: {
                a: 5,
                b: {
                    nested: "foo"
                }
            }
        };
        db.collection("data").doc("one").set(docData).then(function () {
            console.log("Document successfully written!");
        });
    } catch (error) {
        console.log("newExampleOfSet -> error", error)

    }
}

// newExampleOfSet()

updateDocument = () => {
    try {
        db.collection('products').doc('123123').update({
            year: 2021
        }).then(() => {
            alert('Updated')
        })
    } catch (error) {
        console.log("updateDocument -> error", error)
    }
}

// updateDocument()
// firebase.firestore.FieldValue.serverTimestamp()

addInOldValueFromDB = () => {
    try {
        db.collection('counter').doc('abc123').update({
            values : firebase.firestore.FieldValue.increment(50)
        }).then(() => alert("Update with addition"))
    } catch (error) {
        console.log("addInOldValueFromDB -> error", error)
    }
}

addInOldValueFromDB()