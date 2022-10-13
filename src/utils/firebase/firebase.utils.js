import { initializeApp } from 'firebase/app'
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBUHFI3DNu1sJ11KUfZ5Ng2pviz8b5yoLA",
    authDomain: "agazon-db.firebaseapp.com",
    projectId: "agazon-db",
    storageBucket: "agazon-db.appspot.com",
    messagingSenderId: "729628947602",
    appId: "1:729628947602:web:03651b3493161681ce224b"
  };
  

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocFromAuth = async (userAuth)  => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  
  console.log(userSnapshot);
}