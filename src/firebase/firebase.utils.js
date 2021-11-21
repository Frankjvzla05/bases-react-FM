// import firebase from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'; // Add the Firebase Firestore service
import 'firebase/compat/auth'; // firebase.auth()

// config
const config = {
  apiKey: "AIzaSyBS7G0GbNSEzuZ9wmnNAIm3g9ptHFuoL00",
  authDomain: "bases-react-fm.firebaseapp.com",
  projectId: "bases-react-fm",
  storageBucket: "bases-react-fm.appspot.com",
  messagingSenderId: "562862551651",
  appId: "1:562862551651:web:de2baa252c1f3f81577e56"
};

// create my web app with firebase
firebase.initializeApp(config);

// function for create-documents
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uuid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

// exports
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// providers
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;










