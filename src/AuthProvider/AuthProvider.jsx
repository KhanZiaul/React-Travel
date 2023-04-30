import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../Firebase/firebase.config';

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const auth = getAuth(app);

    const [user, setUser] = useState({})

    function createUser(email, password) {

        return createUserWithEmailAndPassword(auth, email, password)
    }

    function signInUser(email, password) {

        return signInWithEmailAndPassword(auth, email, password)
    }

    function popUpSignIn(provider) {
        return signInWithPopup(auth, provider)
    }

    function logOut(provider) {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setUser(user)
        });
        return ()=>{
            unsubscribe()
        }
    }, [])

    const authInfo = {
        user,
        createUser,
        popUpSignIn,
        signInUser,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;