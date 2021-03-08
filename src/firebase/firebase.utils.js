import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyBgqN8htwWkInD8GSrYkZSaMm5bGqea0Rs",
    authDomain: "crown-clothing2-fb59e.firebaseapp.com",
    projectId: "crown-clothing2-fb59e",
    storageBucket: "crown-clothing2-fb59e.appspot.com",
    messagingSenderId: "522545912611",
    appId: "1:522545912611:web:1f2fd23d7c9b5dc2954a96",
    measurementId: "G-37SFHVDC9J"
}

//Intialize the firebase app
firebase.initializeApp(config);

//Create an instance of firebase auth lib
export const auth = firebase.auth();
export const firestore = firebase.firestore();

//Function for Log in with email and password
export const createUserProfileDocument = async ( userAuth,additionalData ) => {
    if(!userAuth) return

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const { displayName,email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log(error.message);
        }

    }

    return userAuth;
}

//Create am instance of Google Auth Provider
const provider = new firebase.auth.GoogleAuthProvider();

//Set custom parameters to provider(select_account)
provider.setCustomParameters({ prompt : 'select_account' });

//Pass the provider to signInWithPopUp
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;






