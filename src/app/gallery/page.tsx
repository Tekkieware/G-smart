'use client'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import app from '../../auth/firebase'
import { Anybody } from 'next/font/google'
import '../../app/globals.css'
import Image from 'next/image'
import { FaK, FaUpload } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { CldUploadWidget, CldUploadWidgetPropsChildren} from 'next-cloudinary';


interface user {
  name: string,
  email: string,
}
function Gallery() {
  const a = process.env.a
  const [userDetails, setUserDetails] = useState<user>()
  const router = useRouter()
  const retrieveUserData = (): user | null => {
    const data = localStorage.getItem("userDetails");
    return data ? JSON.parse(data) as user : null
  }

  useEffect(() => {
    const user = retrieveUserData()
    if (user?.name) {
      setUserDetails(user)
    } else {
      router.push("/")
    }

  }, [userDetails])

  const handleLogout = async () => {
    localStorage.removeItem("userDetails")
    setUserDetails({ name: "", email: "" })
  }

  return (
    <div className='min-h-screen p-12 md:p-16 justify-center home-content'>
      <div className='grid grid-cols-1 lg:grid-cols-3 w-full'>
        <div>
          <Image
            src="/images/logo.png"
            alt="Vercel Logo"
            className="dark:invert"
            width={100}
            height={24}
            priority
          />
        </div>
        <div className='justify-self-center'>
            <CldUploadWidget 
            signatureEndpoint="api/sign-cloudinary-params"
            uploadPreset='g-smart'
            >
              {({ open }) => {
                return (
                  <button onClick={() => open()} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-primary rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  New Photo
                    </button>
                );       
              }}
            </CldUploadWidget>
        </div>
        <div className='justify-self-end'><b className='m-5'>Welcome, {userDetails?.name}</b><button className='py-2 px-5 text-sm font-medium text-red-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700' onClick={handleLogout}>Log Out</button></div>
      </div>
    </div>
  )
}

export default Gallery