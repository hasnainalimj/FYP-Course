var firebaseConfig = {
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()

updateMyDbArray = () => {
    try {
        db.collection('counter').doc('abc123').update({
            cities: firebase.firestore.FieldValue.arrayUnion('Islamabad')
        }).then(() => {
            console.log('Updated Array')
        })
    } catch (error) {
        console.log("updateMyDbArray -> error", error)
    }
}

// updateMyDbArray()

removeMyDbArray = () => {
    try {
        db.collection('counter').doc('abc123').update({
            cities: firebase.firestore.FieldValue.arrayRemove('Lahore')
        }).then(() => {
            console.log('Remove Elements Array')
        })
    } catch (error) {
        console.log("removeMyDbArray -> error", error)
    }
}

// removeMyDbArray()

deleteDocument = () => {
    try {
        db.collection('todo').doc('3dAPsin3Nvjnq3DYwUox').delete().then(() => {
            console.log("Document Deleted")
        })
    } catch (error) {
        console.log("deleteDocument -> error", error)
    }
}

// deleteDocument()


//Deleting specific field/value from any document

deleteSpecificVal = () => {
    try {
        db.collection('counter').doc('abc123').update({
            abc: firebase.firestore.FieldValue.delete()
        }).then(() => {
            console.log('Field Deleted')
        })
    } catch (error) {
        console.log("deleteSpecificVal -> error", error)
    }
}

// deleteSpecificVal()


//Getting filtered data
// getFilteredData = () => {
//     try {
//         db.collection('todo').where('item', '==', 'E').get().then(res => {
//             console.log(res.size)
//             res.forEach(doc => {
//                 console.log(doc.data())
//             })
//         })
//     } catch (error) {
//         console.log("getFilteredData -> error", error)
//     }
// }

// getFilteredData = () => {
//     try {
//         db.collection('todo').where('num', '>', 2).get().then(res => {
//             console.log(res.size)
//             res.forEach(doc => {
//                 console.log(doc.data())
//             })
//         })
//     } catch (error) {
//         console.log("getFilteredData -> error", error)
//     }
// }

// getFilteredData = () => {
//     try {
//         db.collection('todo').where('num', '>=', 2).get().then(res => {
//             console.log(res.size)
//             res.forEach(doc => {
//                 console.log(doc.data())
//             })
//         })
//     } catch (error) {
//         console.log("getFilteredData -> error", error)
//     }
// }

// getFilteredData = () => {
//     try {
//         db.collection('todo').where('num', '<', 2).get().then(res => {
//             console.log(res.size)
//             res.forEach(doc => {
//                 console.log(doc.data())
//             })
//         })
//     } catch (error) {
//         console.log("getFilteredData -> error", error)
//     }
// }

// getFilteredData = () => {
//     try {
//         db.collection('todo').where('num', '<=', 2).get().then(res => {
//             console.log(res.size)
//             res.forEach(doc => {
//                 console.log(doc.data())
//             })
//         })
//     } catch (error) {
//         console.log("getFilteredData -> error", error)
//     }
// }

// getFilteredData = () => {
//     try {
//         db.collection('todo').where('num', '!=', 5).get().then(res => {
//             console.log(res.size)
//             res.forEach(doc => {
//                 console.log(doc.data())
//             })
//         })
//     } catch (error) {
//         console.log("getFilteredData -> error", error)
//     }
// }

getFilteredData = () => {
    try {
        db.collection('todo').where('item', '==', 'E').where('num', '<=', 2).get().then(res => {
            console.log(res.size)
            res.forEach(doc => {
                console.log(doc.data())
            })
        })
    } catch (error) {
        console.log("getFilteredData -> error", error)
    }
}

// getFilteredData()

// validateArrayData = () => {
//     try {
//         db.collection('counter').where('cities', 'array-contains', 'Karachi').get().then(res => {
//             res.forEach(doc => {
//                 console.log(doc.data())
//             })
//         })
//     } catch (error) {
//         console.log("validateArrayData -> error", error)
//     }
// }

// validateArrayData = () => {
//     try {
//         db.collection('counter').where('country', 'in', ['India', 'Pakistan']).get().then(res => {
//         console.log("validateArrayData -> res", res.size)
//             res.forEach(doc => {
//                 console.log(doc.data())
//             })
//         })
//     } catch (error) {
//         console.log("validateArrayData -> error", error)
//     }
// }

// validateArrayData = () => {
//     try {
//         db.collection('counter').where('country', 'not-in', ['India', 'China']).get().then(res => {
//         console.log("validateArrayData -> res", res.size)
//             res.forEach(doc => {
//                 console.log(doc.data())
//             })
//         })
//     } catch (error) {
//         console.log("validateArrayData -> error", error)
//     }
// }

// validateArrayData()


//Get Limited Data

// getLimitedData = () => {
//     try {
//         db.collection('todo').limit(3).get().then(res => {
//             res.forEach(doc => {
//                 console.log(doc.data())
//             })
//         })
//     } catch (error) {
//     console.log("getLimitedData -> error", error)

//     }
// }


// getLimitedData = () => {
//     try {
//         db.collection('todo').orderBy('num', 'asc').get().then(res => { //values are asc / desc default is asc
//             res.forEach(doc => {
//                 console.log(doc.data())
//             })
//         })
//     } catch (error) {
//         console.log("getLimitedData -> error", error)

//     }
// }

// getLimitedData = () => {
//     try {
//         db.collection('todo').orderBy('num', 'desc').limit(3).get().then(res => {
//             res.forEach(doc => {
//                 console.log(doc.data())
//             })
//         })
//     } catch (error) {
//         console.log("getLimitedData -> error", error)

//     }
// }

// getLimitedData()



//Validate On Values

// validateOnValues = () => {
//     try {
//         db.collection('items').orderBy('item').startAt('p').get().then(res => {
//             res.forEach(doc => {
//                 console.log(doc.data())
//             })
//         })
//     } catch (error) {
//     console.log("validateOnValues -> error", error)

//     }
// }

// validateOnValues = () => {
//     try {
//         db.collection('items').orderBy('item').startAt('d').endAt('w').get().then(res => {
//         console.log("validateOnValues -> res", res.size)
//             res.forEach(doc => {
//                 console.log(doc.data())
//             })
//         })
//     } catch (error) {
//         console.log("validateOnValues -> error", error)

//     }
// }


// validateOnValues()


//Firestore Last Topic
//Listening to realtime updates

addItem = () => {
    const item = document.querySelector('#item').value
    try {
        db.collection('cities').add({
            city: item
        }).then(res => {
            alert('Added')
            document.querySelector('#item').value = ''
        })
    } catch (error) {
        console.log("addItem -> error", error)
    }
}

// getCities = () => {
//     const lists = document.querySelector('#lists')
//     try {
//         db.collection('cities').get().then(res => {
//             lists.innerHTML = ''
//             res.forEach(doc => {
//                 lists.innerHTML += `<li>${doc.data().city}</li>`
//             })
//         })
//     } catch (error) {
//         console.log("getCities -> error", error)
//     }
// }

// getCities()

let unsubscribe

getCitiesRealtime = () => {
    const lists = document.querySelector('#lists')
    try {
        unsubscribe = db.collection('cities').onSnapshot(res => {
            lists.innerHTML = ''
            res.forEach(doc => {
                lists.innerHTML += `<li>${doc.data().city}</li>`
            })
        })
    } catch (error) {
        console.log("getCities -> error", error)
    }
}

// db.collection("cities").doc("SF")
//     .onSnapshot(function(doc) {
//         console.log("Current data: ", doc.data());
//     });

getCitiesRealtime()

endLlistener = () => {
    unsubscribe()
}