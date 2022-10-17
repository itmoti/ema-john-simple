import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import app from '../../../Firebase/Firebase.init';

export const AuthContext = createContext();


const auth = getAuth(app)


const UserContext = ({ children }) => {

    const [user, setUser] = useState('')

    const signUpWithEmail = (email, password) => {

        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInWithEmail = (email, password) => {

        return signInWithEmailAndPassword(auth, email, password)
    }

   

    

    const signOutEmail = () => {
        return signOut(auth);
    }
 
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
             setUser(currentUser)
          console.log(currentUser)
        }
        
        );
        return () => unSubscribe;
    }, [])
   
    const authInfo = { signUpWithEmail, signInWithEmail, signOutEmail, user };
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;