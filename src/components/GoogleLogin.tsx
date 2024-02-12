'use client'
import React, { useEffect, useState  } from 'react';
import app from '../auth/firebase'; 
import {getAuth} from 'firebase/auth'
import {useRouter} from 'next/navigation'
import {signInWithPopup, GoogleAuthProvider, User} from 'firebase/auth'
import Image from 'next/image'





const GoogleLogin: React.FC = () => {
  const [user, setUser] = useState<User | null>()
  const router = useRouter()

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

  const signInWithGoogle = async () => {
    const auth  = getAuth(app)
    const provider = new GoogleAuthProvider(); 
    try{
      await signInWithPopup(auth, provider);
      console.log(user);
      router.push("/gallery")
    }catch(error: any){
      console.log("Error signing in with google", error.message)
    }
  }

  return (
    <div className=''>
      <button onClick={signInWithGoogle} className='button-text'>
        Sign in with google 
        
        </button>
    </div>
  );
};

export default GoogleLogin;
