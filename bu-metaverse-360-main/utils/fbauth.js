import { db, app } from "../firebase/clientApp";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, getDoc, updateDoc } from "firebase/firestore";

export const authRegisterWithEmailPassword = async function (username, password, firstname, lastname) {
   const auth = getAuth();
   await createUserWithEmailAndPassword(auth, username, password)
      .then((userCredential) => {
         const user = userCredential.user;
         authUpdateUserProfile(user.uid, username, firstname, lastname).then((aaaa)=> {
            console.log(aaaa)
            return user;
         })
      })
      .catch((error) => {
         console.log('error', error.code, error.message)
         return error;
      });
}


export const authLoginWithEmailPassword = async function (username, password) {
   const auth = getAuth();
   signInWithEmailAndPassword(auth, username, password)
      .then((userCredential) => {
         
         const user = userCredential.user;
         console.log('user', user);
         return user;
      })
      .catch((error) => {
         console.log('error', error.code, error.message)
         setErrorMessage(error.message)
      });
}

export const authUpdateUserProfile = async function (uid, username, firstname, lastname) {

   const data = {
      username: username,
      firstname: firstname,
      lastname: lastname
   }

   const userRef = doc(db, "users", uid);
   const userSnap = await getDoc(userRef);

   if (!userSnap.exists()) {
      console.log('add')
      await setDoc(doc(db, "users", uid), data);
   }
   else {
      console.log('update')
      await updateDoc(userRef, data);
   }
   
   return true;
}

export const authGetUserProfile = async function (uid) {
   const auth = getAuth();

   const userRef = doc(db, "users", uid);
   const userSnap = await getDoc(userRef);

   const userData = userSnap.data();
   console.log(userData)

}