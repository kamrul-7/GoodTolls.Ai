import React, { createContext, useEffect, useState } from "react";
import {
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import app from "./firebase.config";

export const AuthContext = createContext();

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [toggle,setToggle] = useState(false);

    const setTrue=()=>{
        setToggle(true)
    }
    const setFalse=()=>{
        setToggle(false)
    }

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, provider)
            .finally(() => setLoading(false)); 
    };

    const logOut = () => {
        setLoading(true);
        return signOut(auth)
            .finally(() => setLoading(false));  
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    const authInfo = {
        logOut,
        user,
        loading,
        googleSignIn,
        toggle,
        setTrue,
        setFalse
    };

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;
