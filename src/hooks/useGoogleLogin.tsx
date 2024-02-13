'use client'
import React, { useEffect, useState  } from 'react';
import app from '../auth/firebase'; 
import {getAuth} from 'firebase/auth'
import {useRouter} from 'next/navigation'
import {signInWithPopup, GoogleAuthProvider, User} from 'firebase/auth'
import Image from 'next/image'



const useGoogleLogin = () => {
  const [user, setUser] = useState<User | null>()

  useEffect(() => {
    const auth = getAuth(app);
    const unsubscribe =  auth.onAuthStateChanged((user) => {
      if(user){
        setUser(user);
        
      }else{
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, [])

  return {name: user?.displayName, email: user?.email}
};

export default useGoogleLogin;
