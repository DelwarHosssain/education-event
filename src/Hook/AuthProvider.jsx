import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'; 
import auth from "../Firebase/firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContacex = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser]=useState(null)

    const createUser =(email, password)=>{
        return createUserWithEmailAndPassword (auth, email, password);
    }

    const singInUser=(email, password)=>{
        return signInWithEmailAndPassword (auth, email, password);
    }    
    const logOut=()=>{
        return signOut (auth);
    }    



    useEffect(()=>{
        const unSunscribe = onAuthStateChanged(auth, currentUser=>{
            console.log('crent valule',currentUser)
            setUser(currentUser); 

        });
        return()=>{
            unSunscribe();
        }

    },[])


    const authInfo ={user, createUser, singInUser, logOut}


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