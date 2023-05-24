import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import app from '../../Firebase/firebase.init';
export const AuthContext = createContext();

const auth = getAuth(app);

const AuthPro = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoding] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    const creatUser = (email, password) => {
        setLoding(false);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoding(false);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }


    const logOut = () => {
        setLoding(false);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser => {
            console.log(currentUser);
            setUser(currentUser)
            setLoding(false);
        }));
        return () => {
            unsubscribe();
        }
    })

    const authInfo = { user, loading, creatUser, signIn, logOut, signInWithGoogle };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthPro;