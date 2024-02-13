'use client'
import React, {useEffect, useState} from 'react'     
import {useRouter} from 'next/navigation'
import app from '../../auth/firebase'
import { Anybody } from 'next/font/google'
import '../../app/globals.css'

interface user{
    name: string,
    email: string,
}
function Gallery() {
    const a = process.env.a
  const [userDetails, setUserDetails] = useState<user>()
  const router = useRouter()
  const retrieveUserData = (): user | null =>{
    const data = localStorage.getItem("userDetails");
    return data ? JSON.parse(data) as user : null
  }

 useEffect(() =>{
    const user = retrieveUserData()
    if (user?.name){
        setUserDetails(user)
    }else{
        router.push("/")
    }
    
 }, [userDetails])

 const handleLogout = async () =>{
    localStorage.removeItem("userDetails")
    setUserDetails({name: "", email: ""})
 }
  return (
    <div>
        <h1>Welcome to your gallery, {userDetails?.name}</h1>
        <button onClick={handleLogout}>Log Out</button>
    </div>
  )
}

export default Gallery