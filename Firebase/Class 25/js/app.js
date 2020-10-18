var firebaseConfig = {
    
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()

addItem = () => {
    const item = document.querySelector('#item').value
    try {
        db.collection('items').add({ //Add methods always generate a random id document
            item
        }).then(res => {
            console.log(res.id)
        })
    } catch (error) {
        console.log("addItem -> error", error)
    }
}

getAllItems = () => {
    try {
        db.collection('items').get().then(res => {
            // console.log(res.size) //return num of records
            res.forEach(doc => {
                console.log(doc.data())
            })
        })
    } catch (error) {
        console.log("getAllItems -> error", error)
    }
}


addCollectionInDoc = () => {
    const docId = document.querySelector('#docId').value
    try {
        db.collection('items').doc(docId).collection('types').add({
            type: '250 ml'
        }).then(res => {
            console.log(res)
        })
    } catch (error) {
        console.log("addCollectionInDoc -> error", error)
    }
}

addNestedData = () => {
    const docId = document.querySelector('#docId').value
    const type = document.querySelector('#type').value
    try {
        db.collection('items').doc(docId).collection('types').add({
            type
        }).then(res => {
            console.log(res)
        })
    } catch (error) {
        console.log("addNestedData -> error", error)
    }
}

getNestedData = () => {
    const docId = document.querySelector('#docId').value
    try {
        db.collection('items').doc(docId).collection('types').get().then(res => {
            res.forEach(doc => {
                // console.log(doc.id)
                console.log(doc.data())
            })
        })
    } catch (error) {
        console.log("getNestedData -> error", error)
    }
}

getSpecificDoc = () => {
    const docId = document.querySelector('#docId').value
    try {
        db.collection('items').doc(docId).get().then(doc => {
            // console.log(doc.id)
            console.log(doc.data())
        })
    } catch (error) {
        console.log("getSpecificDoc -> error", error)
    }
}

getSpecificNestedDoc = () => {
    const docId = document.querySelector('#docId').value
    const typeId = document.querySelector('#typeId').value
    try {
        db.collection('items').doc(docId).collection('types').doc(typeId).get().then(doc => {
            // console.log(doc.id)
            console.log(doc.data())
        })
    } catch (error) {
        console.log("getSpecificNestedDoc -> error", error)
    }
}