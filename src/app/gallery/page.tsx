'use client'
import React, {useEffect, useState} from 'react'    
import {getAuth, signOut, onAuthStateChanged, User} from 'firebase/auth'   
import {useRouter} from 'next/navigation'
import app from '../../auth/firebase'
import { Anybody } from 'next/font/google'

function Gallery() {
    const auth = getAuth(app);
    const router = useRouter();
    const [user, setUser] = useState<User | null>()

 useEffect(() =>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if(user){
            setUser(user)
        }else{
            router.push("/")
        }
    });
    return() => unsubscribe();
 }, [auth, router])

 const handleLogout = async () =>{
    try{
        await signOut(auth);
        router.push("/")
    }catch(error:any){
        console.log("error signing out:", error.message);
    }
 }
  return (
    <div>
        <h1>Welcome to your gallery, {user?.displayName}</h1>
        <button onClick={handleLogout}>Log Out</button>
    </div>
  )
}

export default Gallery