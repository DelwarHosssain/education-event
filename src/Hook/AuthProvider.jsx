import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'; 
import auth from "../Firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";



const googleProvider =new GoogleAuthProvider();
export const AuthContacex = createContext(null)
const AuthProvider = ({children}) => {
    
    const [Loading, setLoading]=useState(true);

    const [user, setUser]=useState(null)

    const createUser =(email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword (auth, email, password);
    }

    const singInUser=(email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword (auth, email, password);
    }

    const signInWithGoogle= ()=>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
    const logOut=()=>{
        setLoading(true);
        return signOut (auth);
    }    



    useEffect(()=>{
        const unSunscribe = onAuthStateChanged(auth, currentUser=>{
            console.log('crent valule',currentUser)
            setUser(currentUser); 
            setLoading(false);

        });
        return()=>{
            unSunscribe();
        }

    },[])


    const authInfo ={user, createUser, singInUser, logOut, Loading, signInWithGoogle}


    return (
        
            <AuthContacex.Provider value={authInfo}>
                {children}
            </AuthContacex.Provider>
        
    );
};

export default AuthProvider;
AuthProvider.propTypes ={
    children: PropTypes.node,
}