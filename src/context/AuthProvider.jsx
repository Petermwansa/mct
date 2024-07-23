import React, { createContext, useEffect, useState } from 'react'
import app from '../firebase/firebase.config'
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';

export const AuthContext = createContext();
const auth = getAuth();
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    //here we create the user 
    const createUser = ( email, password) => {

        setLoading(true);
        return createUserWithEmailAndPassword( auth, email, password);
    }


    //signing up with google popup 
    const signUpWithGmail = () => {
        setLoading(true);
        return signInWithPopup( auth, provider);
    }

    // login 
    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword( auth, email, password);
    }

    //logout
    const logout = () =>{
        return signOut(auth);
    }

    // user available or not 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            // console.log(currentUser);
            setUser(currentUser);
            setLoading(false)
        });

        return () => {
            return unsubscribe()
        }
    }, [])



    var theUser = auth.currentUser;
    var name, email, photoUrl, uid, emailVerified;
    if (theUser !== null) {
        name = theUser.displayName;
        email = theUser.email;
        photoUrl = theUser.photoURL;
        emailVerified = theUser.emailVerified;
        uid = theUser.uid;
    }
    // console.log(name);
    // console.log(email);
    // console.log(photoUrl);
    // console.log(uid);

    // if (theUser !== null) {
    //     console.log("Not null");
    // }
    



    // this function is sending the info through the api 
    const authInfo = {
        theUser,
        user,
        loading,
        createUser,
        signUpWithGmail,
        login,
        logout,

    }

  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;
