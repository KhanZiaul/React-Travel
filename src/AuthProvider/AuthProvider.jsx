import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../Firebase/firebase.config';

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const auth = getAuth(app);

    const [user, setUser] = useState({})
    
    const [loading, setLoading] = useState(true)

    function createUser(email, password) {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function signInUser(email, password) {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    function popUpSignIn(provider) {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    function logOut(provider) {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setUser(user)
            setLoading(false)
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
        logOut,
        loading
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