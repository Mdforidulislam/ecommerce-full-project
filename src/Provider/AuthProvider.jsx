import { createContext, useEffect, useState } from "react";
import { signInWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, getAuth, updateProfile, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import useRegisterUser from "../Hooks/useRegisterUser";


export const AuthContext = createContext(null)
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider()
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)


    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    const logout = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            // Only update user state if currentUser is different from the existing user state
            if (JSON.stringify(currentUser) !== JSON.stringify(user)) {
                setUser(currentUser);
            }
            setLoading(false);
        });
        return () => {
            unSubscribe();
        };
    }, [user]);

    // calling the user register hook
    const register = useRegisterUser(user);

    console.log(register);



    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })

    }

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        googleSignIn,
        logout,
        updateUserProfile
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;