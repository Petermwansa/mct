import React, { createContext, useEffect, useState } from 'react'
import app from '../firebase/firebase.config'
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';

export const AuthContext = createContext();
const auth = getAuth();
const googleProvider = new GoogleAuthProvider

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    //here we create the user 
    const createUser = ( email, password) => {

        setLoading(true);
        return createUserWithEmailAndPassword( auth, email, password);
    }


    //signing up with gmail 
    const signUpWithGmail = () => {
        setLoading(true);
        return signInWithPopup( auth, googleProvider);
    }

    // login 
    const login = (email, passowrd) => {
        setLoading(true)
        return signInWithEmailAndPassword( auth, email, passowrd);
    }

    //logout
    const logout = () => {
        return signOut(auth);
    }

    // user available or not 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
        });

        return () => {
            return unsubscribe()
        }
    }, [])



    // this function is sending the info through the api 
    const authInfo = {
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
