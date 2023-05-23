import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from 'firebase/auth';
import app from '../../Firebase/firebase.init';
export const AuthContext = createContext();

const auth = getAuth(app);

const AuthPro = ({ children }) => {

    const [user, setUser] = useState({ displayName: 'Niloy' });

    const creatUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const authInfo = { user, creatUser };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthPro;