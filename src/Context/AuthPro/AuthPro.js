import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../../Firebase/firebase.init';
export const AuthContext = createContext();

const auth = getAuth(app);

const AuthPro = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();

    const creatUser = (email, password, displayName) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password, displayName);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUser = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo);

    }

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)

    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser => {
            console.log(currentUser);
            setUser(currentUser)
            setLoading(false);
        }));
        return () => {
            unsubscribe();
        }
    })

    const authInfo = { user, loading, creatUser, signIn, updateUser, logOut, signInWithGoogle };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthPro;