var firebaseConfig = {
    
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// console.log('firebase', firebase)

const auth = firebase.auth()
// console.log("auth", auth)

signup = () => {
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value

    if (!email) return alert('enter email')
    if (!password) return alert('enter password')

    try {
        auth.createUserWithEmailAndPassword(email, password).then((res) => {
            console.log("signup -> res", res)
        })
    } catch (error) {
        console.log("signup -> error", error)
    }
}

signIn = () => {
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value

    if (!email) return alert('enter email')
    if (!password) return alert('enter password')

    try {
        auth.signInWithEmailAndPassword(email, password).then((res) => {
            console.log("signIn -> res", res)
            const user = auth.currentUser
            console.log("signIn -> user", user)

        })
    } catch (error) {
        console.log("signIn -> error", error)
    }
}

//Check your signin session return user object or undefined 
checkUser = () => {
    try {
        auth.onAuthStateChanged((user) => {
            console.log("user", user)
        })
    } catch (error) {
        console.log("checkUser -> error", error)
    }
}

updateMyEmail = () => {
    const email = document.querySelector('#email').value

    if (!email) return alert('enter email')

    try {
        auth.onAuthStateChanged((user) => {
            if (user) {
                console.log("updateMyEmail -> user", user)
                user.updateEmail(email).then(() => {
                    console.log("Email Updated")
                })
            } else {
                alert('Please signin first')
            }
        })
    } catch (error) {
        console.log("updateMyEmail -> error", error)
    }
}

verfiyEmail = () => {
    try {
        auth.onAuthStateChanged((user) => {
            if (user) {
                user.sendEmailVerification(() => {
                    console.log('Email Verification Link sended')
                })
            } else {
                alert('Please signin first')
            }
        })
    } catch (error) {
        console.log("verfiyEmail -> error", error)
    }
}

changePassword = () => {
    const password = document.querySelector('#password').value

    try {
        auth.onAuthStateChanged((user) => {
            if (user) {
                user.updatePassword(password).then(() => {
                    console.log('password updated')
                })
            } else {
                alert('Please signin first')
            }
        })
    } catch (error) {
        console.log("changePassword -> error", error)
    }
}

passResetEmail = () => {
    const email = document.querySelector('#email').value

    try {
        auth.sendPasswordResetEmail(email).then(() => {
            console.log('email sended')
        })
    } catch (error) {
        console.log("passResetEmail -> error", error)
    }
}

deleteAccount = () => {
    try {
        var user = firebase.auth().currentUser;
        if (user) {
            user.delete().then(() => {
                console.log('bye bye user')
            })
        } else {
            alert('Please signin first')
        }
    } catch (error) {
        console.log("deleteAccount -> error", error)
    }
}

signOut = () => {
    try {
        auth.signOut().then(() => {
            console.log('logged out')
        })
    } catch (error) {
        console.log("signOut -> error", error)
    }
}