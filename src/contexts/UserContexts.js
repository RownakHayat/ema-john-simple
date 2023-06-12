import React, { createContext,  useState} from 'react';
import { createUserWithEmailAndPassword, getAuth,  onAuthStateChanged,  signInWithEmailAndPassword, signOut } from 'firebase/auth'
import app from '../firebase/firebase.init';
import { useEffect } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app);


const UserContext = ({children}) => {
   const [user, setUser] = useState(null);
   const [loading, setLaoding] = useState(true);

   const createUser = (email, password) =>{
    setLaoding(true);
    return createUserWithEmailAndPassword(auth, email, password);
   }

   const signIn = (email, password)=>{
   setLaoding(true);
    return signInWithEmailAndPassword(auth, email, password)
   }
const logOut = ()=>{
    setLaoding(true);
    return signOut(auth);
}
useEffect(()=>{
  const unSubscribe =  onAuthStateChanged( auth, currentUser =>{
        console.log(currentUser);
        setUser(currentUser);
        setLaoding(false);
    })
    return () => unSubscribe();
}, [])

    const authInfo = {user, loading, createUser, signIn, logOut}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
            {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;